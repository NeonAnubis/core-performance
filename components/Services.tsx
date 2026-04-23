import Reveal from "./Reveal";

const services = [
  {
    num: "01",
    title: "Continuous Improvement Programmes",
    body: "Lean-based methodologies, KPI frameworks, and process optimisation that compound over time.",
  },
  {
    num: "02",
    title: "ISO 9001, 14001 & 45001 Readiness",
    body: "Gap analysis, structured implementation support, and audit-ready operating systems.",
  },
  {
    num: "03",
    title: "Operational Audits & Reviews",
    body: "Independent assessment of operations, safety, and performance to surface hidden risk.",
  },
  {
    num: "04",
    title: "Human Factors & Performance Analysis",
    body: "Cognitive load, fatigue, behavioural safety, and task-based risk viewed as a single system.",
  },
  {
    num: "05",
    title: "Competency & Training Systems",
    body: "Competency frameworks, skill tracking, and training pathways tuned to your operation.",
  },
  {
    num: "06",
    title: "Fatigue & Risk Management",
    body: "Fatigue risk strategy and planning support for high-risk, 24/7 operations.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-32 lg:py-40">
      <div className="container-core">
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          <Reveal className="lg:col-span-5">
            <span className="eyebrow mb-6">What you can get from Core</span>
            <h2 className="heading-display text-5xl sm:text-6xl lg:text-7xl leading-[1.02] text-balance">
              Practical support.{" "}
              <span className="text-accent italic font-display">Measurable results.</span>
            </h2>
          </Reveal>
          <Reveal delay={2} className="lg:col-span-6 lg:col-start-7 self-end">
            <p className="text-lg text-ink-600 leading-relaxed max-w-xl">
              Core provides specialist consulting and performance solutions
              designed to deliver immediate impact across safety-critical
              operations.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-ink-200">
          {services.map((s, i) => (
            <Reveal
              key={s.num}
              delay={((i % 3) + 1) as 1 | 2 | 3}
              className="group relative border-b border-ink-200 md:[&:nth-child(2n)]:border-l md:[&:nth-child(2n)]:border-ink-200 lg:[&:nth-child(2n)]:border-l-0 lg:[&:nth-child(3n+2)]:border-l lg:[&:nth-child(3n+2)]:border-ink-200 lg:[&:nth-child(3n)]:border-l lg:[&:nth-child(3n)]:border-ink-200 p-8 lg:p-10 hover:bg-ink-50 transition-colors duration-500"
            >
              <div className="flex items-start justify-between mb-12">
                <span className="text-xs font-mono text-ink-400 tracking-wider">
                  {s.num}
                </span>
                <span className="h-8 w-8 rounded-full border border-ink-200 flex items-center justify-center group-hover:bg-ink-900 group-hover:border-ink-900 transition-all duration-500">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden
                    className="text-ink-400 group-hover:text-white transition-colors duration-500 group-hover:translate-x-[1px] group-hover:-translate-y-[1px]"
                  >
                    <path
                      d="M4 12L12 4M12 4H5M12 4V11"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <h3 className="heading-display text-2xl leading-tight mb-4">
                {s.title}
              </h3>
              <p className="text-sm text-ink-600 leading-relaxed">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
