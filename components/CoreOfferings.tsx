import Link from "next/link";
import Reveal from "./Reveal";

const offerings = [
  {
    tag: "01 · Consulting & Advisory",
    title: "Immediate impact where it matters",
    body: "Specialist consultants embedded into your operation to solve audit, performance, fatigue, and human factors challenges, fast.",
    items: [
      "Operational audits and reviews",
      "ISO 9001 / 14001 / 45001 readiness",
      "Human factors and fatigue programmes",
      "Competency frameworks and training",
    ],
    href: "/services",
    cta: "Explore consulting",
  },
  {
    tag: "02 · Software & Systems",
    title: "Scalable technology, built for operations",
    body: "A modular ecosystem led by the Human Performance Engine, designed to measure, manage, and improve human performance at scale.",
    items: [
      "Human Performance Engine",
      "Smart Safety & Performance Station",
      "Environmental Risk & Sand Mitigation",
      "Bespoke systems",
    ],
    href: "/products",
    cta: "Explore products",
  },
];

export default function CoreOfferings() {
  return (
    <section className="bg-white pt-24 lg:pt-32 pb-16">
      <div className="container-core">
        <div className="grid md:grid-cols-2 gap-6">
          {offerings.map((o, i) => (
            <Reveal
              key={o.title}
              delay={((i + 1) as 1 | 2)}
              className="group rounded-3xl border border-ink-200 p-8 lg:p-12 hover:bg-ink-900 hover:text-white transition-colors duration-500"
            >
              <div className="text-xs uppercase tracking-[0.2em] text-ink-400 group-hover:text-white/50 transition-colors mb-8">
                {o.tag}
              </div>
              <h3 className="heading-display text-3xl lg:text-4xl leading-tight mb-6 group-hover:text-white transition-colors">
                {o.title}
              </h3>
              <p className="text-base text-ink-600 group-hover:text-ink-300 leading-relaxed mb-8 transition-colors">
                {o.body}
              </p>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-10">
                {o.items.map((it) => (
                  <li
                    key={it}
                    className="flex items-start gap-2 text-sm text-ink-700 group-hover:text-ink-200 transition-colors"
                  >
                    <span className="text-accent mt-[2px]">+</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={o.href}
                className="inline-flex items-center gap-2 text-sm font-medium link-underline"
              >
                {o.cta}
                <span className="text-accent">→</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
