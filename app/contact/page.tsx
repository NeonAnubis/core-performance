import { Suspense } from "react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact | Core",
  description:
    "Get in touch with Core. Consulting, ISO, audits, human factors, pilot partnerships, and product enquiries. UK & Dubai.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Start the{" "}
            <span className="italic text-accent">conversation.</span>
          </>
        }
        subtitle="Whether you're looking to improve performance, prepare for audit, or explore new systems, we'd like to hear about your operation."
      />

      <section className="bg-white py-24 lg:py-32">
        <div className="container-core grid lg:grid-cols-12 gap-12 lg:gap-20">
          <aside className="lg:col-span-4 space-y-10">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-ink-400 mb-2">
                Email
              </div>
              <a
                href="mailto:info@coreperformancesystems.com"
                className="heading-display text-2xl link-underline"
              >
                info@coreperformancesystems.com
              </a>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-ink-400 mb-2">
                Phone
              </div>
              <a href="tel:+353833211799" className="heading-display text-2xl link-underline">
                +353 83 321 1799
              </a>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-ink-400 mb-2">
                LinkedIn
              </div>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="heading-display text-2xl link-underline"
              >
                Connect with Core
              </a>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-ink-200">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-ink-400 mb-2">
                  United Kingdom
                </div>
                <p className="text-sm text-ink-700 leading-relaxed">
                  London
                  <br />
                  United Kingdom
                </p>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-ink-400 mb-2">
                  Middle East
                </div>
                <p className="text-sm text-ink-700 leading-relaxed">
                  Dubai
                  <br />
                  United Arab Emirates
                </p>
              </div>
            </div>
          </aside>

          <div className="lg:col-span-8">
            <Suspense fallback={<div className="rounded-3xl border border-ink-200 p-10 bg-white h-[500px]" />}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
