import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

const modules = [
  { label: "Fatigue Management", phase: "Current" },
  { label: "Competency Management", phase: "Current" },
  { label: "Resource Planning", phase: "Future" },
  { label: "Performance Analytics", phase: "Future" },
  { label: "Document Management", phase: "Future" },
  { label: "Asset Management", phase: "Future" },
];

export default function CoreSystems() {
  return (
    <section id="products" className="bg-ink-900 text-white py-32 lg:py-40 relative overflow-hidden">
      <div
        aria-hidden
        className="absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[1200px] rounded-full bg-accent/10 blur-[120px] pointer-events-none"
      />

      <div className="container-core relative">
        <div className="grid lg:grid-cols-12 gap-10 mb-20">
          <Reveal className="lg:col-span-7">
            <span className="eyebrow mb-6 text-ink-400" style={{ color: "#8A8A93" }}>
              Core Systems
            </span>
            <h2 className="heading-display text-white text-5xl sm:text-6xl lg:text-[4.5rem] leading-[1.02] text-balance">
              Building the future of{" "}
              <span className="italic text-accent">human performance.</span>
            </h2>
          </Reveal>
          <Reveal delay={2} className="lg:col-span-5 self-end">
            <p className="text-lg text-ink-300 leading-relaxed max-w-xl">
              A modular suite of systems designed to transform how organisations
              manage workforce performance and risk, led by the Human Performance Engine.
            </p>
          </Reveal>
        </div>

        {/* Flagship: Human Performance Engine */}
        <Reveal className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-ink-800 to-ink-900 border border-white/10 mb-10">
          <div className="grid lg:grid-cols-12 gap-0">
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-8">
                <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-accent">
                  Flagship
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-white/70">
                  Entering pilot phase
                </span>
              </div>

              <h3 className="heading-display text-white text-4xl lg:text-5xl leading-tight mb-6">
                Human Performance Engine
              </h3>
              <p className="text-ink-300 text-lg leading-relaxed max-w-lg mb-10">
                A next-generation platform combining fatigue, competency, and
                performance data into one intelligent system, built for
                safety-critical environments.
              </p>

              <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-10 max-w-lg">
                {modules.map((m) => (
                  <div
                    key={m.label}
                    className="flex items-center gap-3 py-3 border-t border-white/10"
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        m.phase === "Current" ? "bg-accent" : "bg-white/20"
                      }`}
                    />
                    <div className="flex-1">
                      <div className="text-sm text-white">{m.label}</div>
                      <div className="text-[10px] uppercase tracking-[0.18em] text-ink-400">
                        {m.phase} phase
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/contact?type=pilot" className="btn-dark-primary">
                Become a Pilot Partner
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>

            <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-[600px] order-1 lg:order-2 bg-ink-800">
              <Image
                src="/section4/1.webp"
                alt="Human Performance Engine dashboard"
                fill
                className="object-cover object-left"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-ink-900/40 to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-transparent lg:to-ink-900/60" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
