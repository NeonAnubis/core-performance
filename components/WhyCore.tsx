import Reveal from "./Reveal";

const points = [
  {
    stat: "Director-level",
    title: "Operational leadership",
    body: "Leadership experience from the top of complex, high-risk operational environments.",
  },
  {
    stat: "Proven",
    title: "Track record",
    body: "Delivery in complex project environments, including Middle East rail turnaround.",
  },
  {
    stat: "Deep",
    title: "Human factors expertise",
    body: "Practitioner-level specialism across fatigue, competency, and behavioural safety.",
  },
  {
    stat: "Measurable",
    title: "Focus on outcomes",
    body: "Practical improvements that show up in performance, safety, and cost.",
  },
];

export default function WhyCore() {
  return (
    <section className="bg-ink-50 py-32 lg:py-40">
      <div className="container-core">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <Reveal className="lg:col-span-6">
            <span className="eyebrow mb-6">Why Core</span>
            <h2 className="heading-display text-5xl sm:text-6xl lg:text-[4.5rem] leading-[1.02] text-balance">
              Built on experience.{" "}
              <span className="italic text-ink-500">Designed for impact.</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-ink-200">
          {points.map((p, i) => (
            <Reveal
              key={p.title}
              delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
              className="group relative border-b border-ink-200 md:[&:nth-child(2n)]:border-l md:[&:nth-child(2n)]:border-ink-200 lg:[&:not(:first-child)]:border-l lg:[&:not(:first-child)]:border-ink-200 p-8 lg:p-10 bg-white hover:bg-ink-900 transition-colors duration-500"
            >
              <div className="text-[10px] uppercase tracking-[0.2em] text-ink-400 group-hover:text-white/60 transition-colors mb-8">
                0{i + 1} / 04
              </div>
              <div className="heading-display text-4xl lg:text-5xl leading-none mb-6 text-ink-900 group-hover:text-accent transition-colors">
                {p.stat}
              </div>
              <h3 className="text-lg font-medium text-ink-900 group-hover:text-white transition-colors mb-3">
                {p.title}
              </h3>
              <p className="text-sm text-ink-600 group-hover:text-ink-300 transition-colors leading-relaxed">
                {p.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
