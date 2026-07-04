import { NextRequest, NextResponse } from "next/server";

interface ContactFormData {
  name: string;
  email: string;
  inquiryType: string;
  message: string;
  /** honeypot — humans never see this field; bots fill it */
  company?: string;
}

const INQUIRY_LABELS: Record<string, string> = {
  platform: "Platform Inquiry",
  partnership: "Partnership",
  waitlist: "Waitlist Signup",
  general: "General Inquiry",
};

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function sendViaResend(data: ContactFormData) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { delivered: false as const, reason: "no RESEND_API_KEY configured" };

  const label = INQUIRY_LABELS[data.inquiryType] ?? "Inquiry";
  const to = process.env.CONTACT_EMAIL || "contact@beltraindustries.com";
  const from = process.env.CONTACT_FROM || "Beltra Industries <onboarding@resend.dev>";

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: data.email,
      subject: `[beltraindustries.com] ${label} from ${data.name}`,
      html: `
        <h2 style="font-family:monospace">${escapeHtml(label)}</h2>
        <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space:pre-wrap">${escapeHtml(data.message)}</p>
      `,
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    return { delivered: false as const, reason: `Resend ${res.status}: ${detail}` };
  }
  return { delivered: true as const };
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    const { name, email, inquiryType, message, company } = body;

    // Honeypot: pretend success so bots don't adapt, deliver nothing
    if (company) {
      return NextResponse.json(
        { success: true, message: "Message received successfully" },
        { status: 200 }
      );
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    if (name.length > 200 || email.length > 200 || message.length > 5000) {
      return NextResponse.json(
        { error: "Message is too long" },
        { status: 400 }
      );
    }

    const result = await sendViaResend({ name, email, inquiryType, message });
    if (!result.delivered) {
      // Keep a trace in the server log so submissions are never silently lost
      console.warn(`Contact email not delivered (${result.reason}):`, {
        name,
        email,
        inquiryType,
        message,
        timestamp: new Date().toISOString(),
      });
    }

    return NextResponse.json(
      { success: true, message: "Message received successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "An error occurred while processing your request" },
      { status: 500 }
    );
  }
}
