import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import FinalCTA from "@/components/FinalCTA";

export const metadata = {
  title: "Case Studies | Core",
  description:
    "Real-world results from Core: rail turnaround in the Middle East, operational performance, and safety & human performance programmes.",
};

const studies = [
  {
    num: "01",
    sector: "Rail & Infrastructure · Middle East",
    title: "Middle East rail project turnaround",
    challenge:
      "A major rail programme faced schedule slippage, safety concerns, and inconsistent operational standards across multiple contractors.",
    action:
      "Embedded director-level operational leadership on site. Rebuilt planning, competency, and performance frameworks. Introduced fatigue and human factors controls across shift patterns.",
    result:
      "Programme stabilised, safety posture improved, and delivery cadence restored, now cited as a benchmark for high-risk infrastructure turnaround in the region.",
    image: "/hero_section/3.webp",
  },
  {
    num: "02",
    sector: "Operations · UK",
    title: "Operational performance improvement",
    challenge:
      "Key operational KPIs had plateaued despite multiple internal improvement attempts. Leadership lacked a common operating picture.",
    action:
      "Deployed an independent audit and diagnostic. Rebuilt KPI frameworks and continuous improvement cadence. Aligned frontline, middle management, and exec teams to a single plan.",
    result:
      "Measured improvements across throughput, compliance, and safety within two quarters, sustained by the new operating rhythm.",
    image: "/section3/1.webp",
  },
  {
    num: "03",
    sector: "Safety & Human Performance",
    title: "Safety and human performance enhancement",
    challenge:
      "Repeat incidents with human factors at their root were eroding confidence and adding cost across a safety-critical operation.",
    action:
      "Human factors diagnostic across planning, task design, and competency. Introduced fatigue risk management and behavioural safety approaches.",
    result:
      "Reduction in human-factor-related incidents and a measurable uplift in near-miss reporting, an early indicator of a healthier safety culture.",
    image: "/section3/3.webp",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title={
          <>
            Real delivery,{" "}
            <span className="italic text-accent">real numbers.</span>
          </>
        }
        subtitle="How Core has helped organisations turn around complex operations, from Middle East rail to UK performance programmes."
      />

      <section className="bg-white py-24">
        <div className="container-core space-y-10 lg:space-y-14">
          {studies.map((s, i) => (
            <Reveal
              key={s.num}
              as="article"
              delay={((i % 3) + 1) as 1 | 2 | 3}
              className="group grid lg:grid-cols-12 gap-8 lg:gap-12 items-start rounded-3xl border border-ink-200 p-6 lg:p-10 hover:border-ink-900 transition-colors duration-500"
            >
              <div
                className={`relative aspect-[4/3] lg:aspect-[4/5] rounded-2xl overflow-hidden lg:col-span-5 ${
                  i % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <div className="lg:col-span-7 space-y-8">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-ink-400 tracking-wider">
                    {s.num}
                  </span>
                  <span className="text-xs uppercase tracking-[0.2em] text-ink-500">
                    {s.sector}
                  </span>
                </div>

                <h2 className="heading-display text-3xl lg:text-5xl leading-[1.05]">
                  {s.title}
                </h2>

                <div className="grid sm:grid-cols-3 gap-6 pt-4 border-t border-ink-200">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-accent mb-2">
                      Challenge
                    </div>
                    <p className="text-sm text-ink-700 leading-relaxed">
                      {s.challenge}
                    </p>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-accent mb-2">
                      Action
                    </div>
                    <p className="text-sm text-ink-700 leading-relaxed">
                      {s.action}
                    </p>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-accent mb-2">
                      Result
                    </div>
                    <p className="text-sm text-ink-700 leading-relaxed">
                      {s.result}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
