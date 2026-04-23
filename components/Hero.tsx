import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-ink-900 text-white pt-28 pb-20">
      {/* Background primary image */}
      <div className="absolute inset-0">
        <Image
          src="/hero_section/1.webp"
          alt="Rail infrastructure workers at night"
          fill
          priority
          className="object-cover object-center scale-105 animate-fade-in"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/75 to-ink-900/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-transparent to-ink-900/60" />
      </div>

      <div className="relative container-core grid lg:grid-cols-12 gap-12 items-end min-h-[calc(100vh-7rem)]">
        <div className="lg:col-span-8 xl:col-span-7 max-w-3xl">
          <div className="flex items-center gap-3 mb-10 animate-fade-in">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              Now onboarding pilot partners · UK & Dubai
            </span>
          </div>

          <h1 className="heading-display text-white text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[1.02] text-balance animate-fade-up">
            Optimising human performance in safety-critical operations.
          </h1>

          <p
            className="mt-8 text-lg sm:text-xl text-ink-200 max-w-2xl leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.15s" }}
          >
            Consulting and intelligent systems designed to improve safety,
            performance, and operational reliability across complex environments.
          </p>

          <div
            className="mt-12 flex flex-wrap items-center gap-4 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Link href="/contact?type=consulting" className="btn-dark-primary">
              Request Consultation
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link href="/contact?type=pilot" className="btn-dark-secondary">
              Become a Pilot Partner
            </Link>
          </div>

          <p
            className="mt-16 text-sm text-ink-300 max-w-md border-l border-white/20 pl-5 animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            Proven delivery across complex infrastructure environments, including
            major rail operations in the Middle East.
          </p>
        </div>

        {/* Right image stack */}
        <div className="hidden lg:block lg:col-span-4 xl:col-span-5 relative h-[520px]">
          <div
            className="absolute right-0 top-0 w-[70%] aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Image
              src="/hero_section/2.webp"
              alt="Operations control room"
              fill
              className="object-cover"
              sizes="30vw"
            />
          </div>
          <div
            className="absolute left-0 bottom-0 w-[60%] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10 animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            <Image
              src="/hero_section/3.webp"
              alt="Freight rail in desert"
              fill
              className="object-cover"
              sizes="25vw"
            />
          </div>
        </div>
      </div>

      {/* Sector marquee */}
      <div className="relative mt-12 border-t border-white/10 overflow-hidden">
        <div className="container-core flex items-center gap-8 py-6 text-xs uppercase tracking-[0.2em] text-ink-400">
          <span className="shrink-0">Trusted across</span>
          <div className="flex-1 overflow-hidden">
            <div className="flex items-center gap-10 animate-marquee whitespace-nowrap">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex items-center gap-10 shrink-0">
                  {["Rail & Infrastructure", "Construction", "Aviation", "Healthcare", "Transport", "Energy & Industrial"].map(
                    (label) => (
                      <span key={label} className="flex items-center gap-10 text-ink-300">
                        <span>{label}</span>
                        <span className="h-1 w-1 rounded-full bg-accent" />
                      </span>
                    )
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
