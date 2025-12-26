import { NextRequest, NextResponse } from "next/server";

interface ContactFormData {
  name: string;
  email: string;
  inquiryType: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    const { name, email, inquiryType, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Send an email notification
    // 2. Store in a database
    // 3. Integrate with a CRM
    // 4. Send to a webhook (Slack, Discord, etc.)

    // For now, we'll log the submission and return success
    // In production, replace this with your preferred integration
    console.log("Contact form submission:", {
      name,
      email,
      inquiryType,
      message,
      timestamp: new Date().toISOString(),
    });

    // Example: Send to an email service
    // await sendEmail({
    //   to: 'contact@beltraindustries.com',
    //   subject: `New ${inquiryType} inquiry from ${name}`,
    //   body: message,
    //   replyTo: email,
    // });

    // Example: Store in database
    // await db.contactSubmissions.create({
    //   data: { name, email, inquiryType, message },
    // });

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
