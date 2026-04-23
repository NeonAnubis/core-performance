import Link from "next/link";
import Reveal from "./Reveal";

export default function FinalCTA() {
  return (
    <section className="bg-ink-900 text-white py-32 lg:py-48 relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-x-0 -top-60 h-[500px] bg-gradient-to-b from-accent/20 to-transparent blur-3xl opacity-60 pointer-events-none"
      />

      <div className="container-core relative">
        <Reveal className="max-w-5xl">
          <span className="eyebrow mb-6 !text-white/60">Start the conversation</span>
          <h2 className="heading-display text-white text-5xl sm:text-7xl lg:text-[7rem] xl:text-[8rem] leading-[1] text-balance">
            Whether it's performance, audit-readiness, or new systems,{" "}
            <span className="italic text-accent">we can help.</span>
          </h2>
        </Reveal>

        <Reveal
          delay={2}
          className="mt-16 flex flex-wrap gap-4 items-center justify-between"
        >
          <div className="flex flex-wrap gap-4">
            <Link href="/contact?type=consulting" className="btn-dark-primary">
              Request a Consultation
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link href="/contact" className="btn-dark-secondary">
              Contact Us
            </Link>
          </div>
          <div className="flex items-center gap-8 text-sm text-ink-300">
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-ink-400 mb-1">
                UK
              </div>
              <div>London</div>
            </div>
            <div className="h-10 w-px bg-white/10" />
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-ink-400 mb-1">
                Middle East
              </div>
              <div>Dubai</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
