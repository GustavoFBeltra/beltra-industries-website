"use client";

import { useState, type FormEvent } from "react";

type FormStatus = "idle" | "sending" | "success" | "error";

const inquiryTypes = [
  { value: "platform", label: "Platform Inquiry" },
  { value: "partnership", label: "Partnership" },
  { value: "waitlist", label: "Waitlist Signup" },
  { value: "general", label: "General Inquiry" },
];

const inputClasses =
  "w-full border border-fog bg-paper px-4 py-3.5 text-sm text-ink placeholder:text-steel focus:border-ink focus:outline-none transition-colors";

export default function ContactForm({
  defaultType = "general",
}: {
  defaultType?: string;
}) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.error || "An unexpected error occurred");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error ? err.message : "An unexpected error occurred"
      );
    }
  }

  if (status === "success") {
    return (
      <div className="reg-plate border border-fog p-10 text-center sm:p-16">
        <p className="tech-label text-graphite">Message Received</p>
        <h2 className="display mt-6 text-3xl">Thank you</h2>
        <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-graphite">
          We&apos;ve received your message and will get back to you soon.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="tech-label mt-10 border border-ink px-6 py-3 transition-colors hover:bg-ink hover:text-paper"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="reg-plate border border-fog p-6 sm:p-10"
      noValidate={false}
    >
      {/* Honeypot: invisible to humans, bots fill it and get quietly dropped */}
      <div aria-hidden="true" className="absolute -left-[9999px] top-0">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="tech-label mb-2 block text-graphite">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="email" className="tech-label mb-2 block text-graphite">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="your@email.com"
            className={inputClasses}
          />
        </div>
      </div>

      <div className="mt-6">
        <label
          htmlFor="inquiryType"
          className="tech-label mb-2 block text-graphite"
        >
          Inquiry Type
        </label>
        <select
          id="inquiryType"
          name="inquiryType"
          defaultValue={
            inquiryTypes.some((t) => t.value === defaultType)
              ? defaultType
              : "general"
          }
          className={inputClasses}
        >
          {inquiryTypes.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-6">
        <label
          htmlFor="message"
          className="tech-label mb-2 block text-graphite"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Tell us about your project or inquiry..."
          className={inputClasses}
        />
      </div>

      {status === "error" && (
        <p role="alert" className="mt-6 border border-ink bg-ink px-4 py-3 text-sm text-paper">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="tech-label mt-8 w-full border border-ink bg-ink px-7 py-4 text-paper transition-colors hover:bg-paper hover:text-ink disabled:opacity-50 sm:w-auto"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
