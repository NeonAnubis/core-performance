import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

const benefits = [
  {
    title: "Early Access",
    body: "Be among the first to deploy a next-generation human performance system before wider market release.",
  },
  {
    title: "Preferred Commercial Terms",
    body: "Favourable commercial arrangements in recognition of early adoption and collaboration.",
  },
  {
    title: "Influence on Development",
    body: "Direct input into system functionality, aligned with your real operational challenges.",
  },
  {
    title: "Tailored Implementation",
    body: "The system is adapted to your environment, not a one-size-fits-all rollout.",
  },
  {
    title: "Strategic Advantage",
    body: "Early insight into workforce performance trends, risk exposure, and optimisation opportunities.",
  },
];

const involves = [
  "Initial operational review and alignment",
  "Configuration of core modules (fatigue, competency, performance)",
  "Integration with existing processes where possible",
  "Ongoing refinement based on real-world use",
  "Direct collaboration with Core during development",
];

export default function PilotPartners() {
  return (
    <section id="pilot-partners" className="bg-white py-32 lg:py-40 relative overflow-hidden">
      <div className="container-core">
        <div className="grid lg:grid-cols-12 gap-12 mb-20 items-end">
          <Reveal className="lg:col-span-7">
            <span className="eyebrow mb-6">Pilot Partners · UK & Dubai</span>
            <h2 className="heading-display text-5xl sm:text-6xl lg:text-[4.5rem] leading-[1.02] text-balance">
              Now onboarding pilot partners for the{" "}
              <span className="italic text-accent">Human Performance Engine.</span>
            </h2>
          </Reveal>
          <Reveal delay={2} className="lg:col-span-5">
            <p className="text-lg text-ink-600 leading-relaxed">
              A limited number of organisations are being onboarded across the
              UK and Middle East to support first-phase deployment. Pilot
              partners work directly with Core during early-stage
              implementation, helping shape the system while gaining immediate
              operational value.
            </p>
          </Reveal>
        </div>

        {/* Image collage */}
        <Reveal className="grid grid-cols-12 gap-4 lg:gap-6 mb-24">
          <div className="col-span-12 md:col-span-7 relative aspect-[16/10] rounded-3xl overflow-hidden">
            <Image
              src="/section5/1.webp"
              alt="Partnership handshake on a construction site"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 55vw"
            />
          </div>
          <div className="col-span-7 md:col-span-5 relative aspect-[4/3] rounded-3xl overflow-hidden">
            <Image
              src="/section5/2.webp"
              alt="Digital collaboration overlay"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 58vw, 40vw"
            />
          </div>
          <div className="col-span-5 md:col-span-5 md:col-start-8 relative aspect-[4/3] rounded-3xl overflow-hidden">
            <Image
              src="/section5/3.webp"
              alt="City and infrastructure network"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 42vw, 40vw"
            />
          </div>
        </Reveal>

        {/* What the pilot involves + benefits */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
          <div className="lg:col-span-5">
            <Reveal>
              <h3 className="heading-display text-3xl lg:text-4xl leading-tight mb-8">
                What the pilot programme involves
              </h3>
              <ul className="space-y-0">
                {involves.map((item, i) => (
                  <li
                    key={item}
                    className="flex items-start gap-4 py-4 border-t border-ink-200 last:border-b"
                  >
                    <span className="text-xs font-mono text-ink-400 pt-1">
                      0{i + 1}
                    </span>
                    <span className="text-base text-ink-700 leading-relaxed flex-1">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={1}>
              <h3 className="heading-display text-3xl lg:text-4xl leading-tight mb-8">
                Key benefits
              </h3>
            </Reveal>
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((b, i) => (
                <Reveal
                  key={b.title}
                  delay={((i % 3) + 1) as 1 | 2 | 3}
                  className="rounded-2xl border border-ink-200 p-6 hover:border-ink-900 transition-colors duration-500 bg-ink-50"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <span className="h-8 w-8 rounded-full bg-white border border-ink-200 flex items-center justify-center text-accent">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
                        <path
                          d="M3.5 8.5L6.5 11.5L12.5 5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <h4 className="heading-display text-xl leading-tight pt-1">
                      {b.title}
                    </h4>
                  </div>
                  <p className="text-sm text-ink-600 leading-relaxed pl-11">
                    {b.body}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Ideal partner + CTA */}
        <Reveal className="rounded-3xl bg-ink-900 text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          <div
            aria-hidden
            className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-accent/20 blur-3xl"
          />
          <div className="relative grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="eyebrow mb-4 !text-white/60">Ideal partner profile</span>
              <h3 className="heading-display text-white text-3xl lg:text-4xl leading-tight mb-8 max-w-xl">
                Organisations that operate at the edge, and want to set the standard.
              </h3>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                {[
                  "Operate in safety-critical environments",
                  "Open to innovation and system-based improvement",
                  "Focused on performance, safety, and efficiency",
                  "Able to commit to collaboration during the pilot phase",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm text-ink-200">
                    <span className="text-accent mt-1">+</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-5 flex flex-col gap-3 lg:items-end">
              <Link href="/contact?type=pilot" className="btn-dark-primary w-full lg:w-auto">
                Apply to Become a Pilot Partner
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link href="/contact" className="btn-dark-secondary w-full lg:w-auto">
                Request an Initial Discussion
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
