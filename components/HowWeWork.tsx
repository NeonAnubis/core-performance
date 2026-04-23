import Image from "next/image";
import Reveal from "./Reveal";

const pillars = [
  {
    title: "Real operations.",
    body: "Built from frontline delivery, not a textbook. Our methods are tested in live, complex environments.",
  },
  {
    title: "Data-driven thinking.",
    body: "We translate operational data into clear decisions about planning, performance, and risk.",
  },
  {
    title: "People, performance, systems.",
    body: "Aligning the three is where measurable improvement lives, and where we focus.",
  },
];

export default function HowWeWork() {
  return (
    <section className="bg-ink-50 py-32 lg:py-40 relative overflow-hidden">
      <div className="container-core relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <Reveal>
              <span className="eyebrow mb-6">How Core works</span>
              <h2 className="heading-display text-5xl sm:text-6xl lg:text-[4.5rem] leading-[1.02] text-balance mb-8">
                Consulting expertise.{" "}
                <span className="italic text-ink-500">Built for real operations.</span>
              </h2>
              <p className="text-lg text-ink-600 leading-relaxed max-w-lg">
                Core combines real-world operational experience with data-driven
                thinking to improve how organisations plan, manage, and deliver
                work. From frontline operations to strategic leadership, our
                approach focuses on aligning people, performance, and systems.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <Reveal delay={1}>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                  <Image
                    src="/section3/1.webp"
                    alt="Advisory team in a strategy session"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 50vw, 30vw"
                  />
                </div>
                <div className="space-y-4">
                  <div className="relative aspect-square rounded-2xl overflow-hidden">
                    <Image
                      src="/section3/2.webp"
                      alt="Digital systems visualisation"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1024px) 50vw, 30vw"
                    />
                  </div>
                  <div className="relative aspect-square rounded-2xl overflow-hidden">
                    <Image
                      src="/section3/3.webp"
                      alt="Site engineers collaborating"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1024px) 50vw, 30vw"
                    />
                  </div>
                </div>
              </div>
            </Reveal>

            <div className="space-y-0 pt-8">
              {pillars.map((p, i) => (
                <Reveal
                  key={p.title}
                  delay={((i + 1) as 1 | 2 | 3)}
                  className="group grid grid-cols-12 gap-4 py-8 border-t border-ink-200 items-baseline"
                >
                  <span className="col-span-1 text-xs font-mono text-ink-400">
                    0{i + 1}
                  </span>
                  <h3 className="col-span-11 sm:col-span-4 heading-display text-2xl leading-tight">
                    {p.title}
                  </h3>
                  <p className="col-start-2 col-span-11 sm:col-start-6 sm:col-span-7 text-base text-ink-600 leading-relaxed">
                    {p.body}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
