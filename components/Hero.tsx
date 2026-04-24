import Image from "next/image";
import Link from "next/link";
import type { SVGProps } from "react";

const features: { label: string; Icon: (p: SVGProps<SVGSVGElement>) => JSX.Element }[] = [
  { label: "Data-driven insights", Icon: IconChart },
  { label: "Real-time risk alerts", Icon: IconAlert },
  { label: "Measurable impact", Icon: IconImpact },
  { label: "Built for safety-critical operations", Icon: IconShield },
];

export default function Hero() {
  return (
    <section className="relative bg-[#0A0F17] text-white overflow-hidden pt-28 lg:pt-32 pb-20 lg:pb-24">
      {/* Dim industrial background behind text */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/hero_section/2.webp"
          alt=""
          aria-hidden
          fill
          priority
          className="object-cover object-center opacity-[0.18]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F17] via-[#0A0F17]/85 to-[#0A0F17]/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0F17]/40 to-[#0A0F17]" />
      </div>

      {/* Soft accent glow */}
      <div
        aria-hidden
        className="absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-accent/10 blur-[120px] pointer-events-none"
      />

      <div className="relative container-core">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left: copy */}
          <div className="lg:col-span-5">
            <div className="mb-8 animate-fade-in">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-white/80">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                Now onboarding pilot partners · UK & Dubai
              </span>
            </div>

            <h1 className="font-sans font-black text-4xl sm:text-5xl lg:text-[3rem] xl:text-[3.5rem] leading-[1.08] tracking-[-0.02em] text-balance animate-fade-up">
              Optimising human performance in safety-critical operations.
            </h1>

            <p
              className="mt-6 text-base sm:text-lg text-ink-300 leading-relaxed max-w-xl animate-fade-up"
              style={{ animationDelay: "0.12s" }}
            >
              Consulting and intelligent systems designed to improve safety,
              performance, and operational reliability across complex
              environments.
            </p>

            <div
              className="mt-9 flex flex-wrap items-center gap-3 animate-fade-up"
              style={{ animationDelay: "0.25s" }}
            >
              <Link
                href="/contact?type=consulting"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-accent-600 hover:-translate-y-px shadow-[0_8px_24px_-8px_rgba(232,70,60,0.6)]"
              >
                Request a Consultation
                <ArrowRight />
              </Link>
              <Link
                href="/contact?type=pilot"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:-translate-y-px"
              >
                Become a Pilot Partner
                <ArrowRight />
              </Link>
            </div>

            <p
              className="mt-10 text-[13px] text-ink-400 max-w-md border-l border-white/15 pl-4 leading-relaxed animate-fade-up"
              style={{ animationDelay: "0.35s" }}
            >
              Proven delivery across complex infrastructure environments,
              including major rail operations in the Middle East.
            </p>

            {/* Feature row */}
            <div
              className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-6 animate-fade-up max-w-xl"
              style={{ animationDelay: "0.45s" }}
            >
              {features.map(({ label, Icon }, i) => (
                <div
                  key={label}
                  className={`flex flex-col gap-3 ${
                    i > 0 ? "sm:border-l sm:border-white/10 sm:pl-4" : ""
                  }`}
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.04] border border-white/10 text-white">
                    <Icon className="h-[18px] w-[18px]" />
                  </span>
                  <span className="text-[13px] leading-snug text-ink-200">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: dashboard screenshot */}
          <div className="lg:col-span-7 relative">
            <div
              className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] animate-fade-up bg-ink-800"
              style={{ animationDelay: "0.3s" }}
            >
              <Image
                src="/hero_section/dashboard.png"
                alt="Human Performance Engine dashboard"
                width={1600}
                height={900}
                priority
                className="w-full h-auto block"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
              <div
                aria-hidden
                className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-2xl pointer-events-none"
              />
            </div>

            {/* Subtle floating accent card behind the dashboard on lg+ */}
            <div
              aria-hidden
              className="hidden lg:block absolute -z-10 -right-8 -bottom-8 h-48 w-48 rounded-2xl bg-accent/10 blur-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconChart(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M4 20V10M10 20V4M16 20v-8M22 20H2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconAlert(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M12 3a7 7 0 0 0-7 7v4l-2 3h18l-2-3v-4a7 7 0 0 0-7-7zm-2 17a2 2 0 0 0 4 0"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconImpact(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M3 17l6-6 4 4 8-8m0 0v5m0-5h-5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconShield(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 12l2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
