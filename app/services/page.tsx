import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import FinalCTA from "@/components/FinalCTA";

export const metadata = {
  title: "Services | Core",
  description:
    "Consulting services across human factors, ISO compliance, operational audits, continuous improvement, competency, and specialist advisory.",
};

const services = [
  {
    id: "human-factors",
    num: "01",
    title: "Human Factors & Performance",
    body: "Where operations break down, people are usually at the centre of it. We map the real-world conditions that drive errors, fatigue, and underperformance, and design them out.",
    items: [
      "Fatigue and cognitive load",
      "Human reliability",
      "Behavioural safety",
      "Task-based risk",
    ],
  },
  {
    id: "iso",
    num: "02",
    title: "ISO & Compliance",
    body: "Move from paperwork to an operating system your teams actually use. We align your management systems to the standard without the bureaucracy.",
    items: [
      "ISO 9001 (Quality)",
      "ISO 14001 (Environment)",
      "ISO 45001 (Occupational H&S)",
      "Gap analysis and implementation support",
    ],
  },
  {
    id: "audits",
    num: "03",
    title: "Audits & Reviews",
    body: "Independent, operator-led assessments that surface the risks your own teams are too close to see.",
    items: [
      "Operational audits",
      "Safety inspections",
      "Performance diagnostics",
    ],
  },
  {
    id: "improvement",
    num: "04",
    title: "Continuous Improvement",
    body: "Lean-based improvement programmes, KPI frameworks, and process optimisation built to compound, not to fade after a workshop.",
    items: [
      "Lean-based improvement",
      "KPI frameworks",
      "Process optimisation",
    ],
  },
  {
    id: "competency",
    num: "05",
    title: "Competency & Training",
    body: "Competency frameworks and training systems that match the actual skills your operation needs, not a generic matrix.",
    items: [
      "Competency frameworks",
      "Skill tracking",
      "Training programme development",
    ],
  },
  {
    id: "advisory",
    num: "06",
    title: "Specialist Advisory",
    body: "Senior-level support for high-risk, high-complexity environments, including rail and infrastructure delivery in the Middle East.",
    items: [
      "Fatigue risk management",
      "Planning and resource strategy",
      "High-risk operations support",
      "Middle East operations",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Consulting that shows up in the numbers,{" "}
            <span className="italic text-accent">and on the ground.</span>
          </>
        }
        subtitle="Primary revenue driver. Clear capability, clear value across human factors, compliance, audit, improvement, and specialist advisory."
      />

      <section className="bg-white py-24">
        <div className="container-core">
          <div className="space-y-0">
            {services.map((s) => (
              <Reveal
                key={s.id}
                as="article"
                className="group"
              >
                <a
                  id={s.id}
                  href={`#${s.id}`}
                  className="block border-t border-ink-200 py-10 lg:py-14 grid lg:grid-cols-12 gap-8 hover:bg-ink-50 transition-colors -mx-6 sm:-mx-8 lg:-mx-12 px-6 sm:px-8 lg:px-12"
                >
                  <div className="lg:col-span-2">
                    <span className="text-sm font-mono text-ink-400">{s.num}</span>
                  </div>
                  <div className="lg:col-span-5">
                    <h2 className="heading-display text-3xl lg:text-5xl leading-tight group-hover:text-accent transition-colors">
                      {s.title}
                    </h2>
                  </div>
                  <div className="lg:col-span-5 space-y-6">
                    <p className="text-base text-ink-600 leading-relaxed">
                      {s.body}
                    </p>
                    <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
                      {s.items.map((it) => (
                        <li
                          key={it}
                          className="flex items-start gap-2 text-sm text-ink-700"
                        >
                          <span className="text-accent mt-[2px]">+</span>
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </a>
              </Reveal>
            ))}
            <div className="border-t border-ink-200" />
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
