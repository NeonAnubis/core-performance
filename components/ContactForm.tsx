"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const enquiryTypes = [
  { value: "consulting", label: "Consulting / Advisory" },
  { value: "iso", label: "ISO / Audit" },
  { value: "human-factors", label: "Human Factors" },
  { value: "pilot", label: "Pilot Partner" },
  { value: "product", label: "Product Enquiry" },
  { value: "general", label: "General" },
];

export default function ContactForm() {
  const params = useSearchParams();
  const initialType = params?.get("type") ?? "consulting";
  const [type, setType] = useState(initialType);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialType) setType(initialType);
  }, [initialType]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-3xl bg-ink-900 text-white p-10 lg:p-16">
        <div className="text-accent text-sm font-medium uppercase tracking-[0.2em] mb-6">
          Thank you
        </div>
        <h3 className="heading-display text-4xl lg:text-5xl leading-tight mb-6">
          We've received your enquiry.
        </h3>
        <p className="text-ink-300 text-lg leading-relaxed max-w-lg">
          A member of the Core team will be in touch within one working day.
          In the meantime, feel free to explore our case studies.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-ink-200 p-6 lg:p-10 bg-white"
    >
      <div className="mb-10">
        <label className="text-xs uppercase tracking-[0.2em] text-ink-400 mb-3 block">
          Enquiry type
        </label>
        <div className="flex flex-wrap gap-2">
          {enquiryTypes.map((e) => (
            <button
              type="button"
              key={e.value}
              onClick={() => setType(e.value)}
              className={`rounded-full px-4 py-2 text-sm transition-all ${
                type === e.value
                  ? "bg-ink-900 text-white border border-ink-900"
                  : "bg-white text-ink-700 border border-ink-200 hover:border-ink-900"
              }`}
            >
              {e.label}
            </button>
          ))}
        </div>
        <input type="hidden" name="enquiryType" value={type} />
      </div>

      <div className="grid sm:grid-cols-2 gap-6 mb-6">
        <Field label="Full name" name="name" required />
        <Field label="Organisation" name="organisation" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone (optional)" name="phone" type="tel" />
      </div>

      <div className="mb-8">
        <Field label="Region" name="region" placeholder="UK, Middle East, Other…" />
      </div>

      <div className="mb-10">
        <label className="text-xs uppercase tracking-[0.2em] text-ink-400 mb-3 block">
          About your operation
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="A few lines on what you're working on or trying to improve."
          className="w-full rounded-2xl border border-ink-200 p-4 text-base text-ink-900 placeholder:text-ink-400 focus:border-ink-900 focus:outline-none transition-colors resize-none"
        />
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-xs text-ink-500 max-w-sm">
          By submitting, you agree to Core contacting you about your enquiry. We'll
          never share your information.
        </p>
        <button type="submit" className="btn-primary self-start sm:self-auto">
          Send enquiry
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </form>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
};

function Field({ label, name, type = "text", required, placeholder }: FieldProps) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.2em] text-ink-400 mb-2 block">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-ink-200 p-4 text-base text-ink-900 placeholder:text-ink-400 focus:border-ink-900 focus:outline-none transition-colors"
      />
    </label>
  );
}
