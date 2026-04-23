import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import FinalCTA from "@/components/FinalCTA";
import Image from "next/image";

export const metadata = {
  title: "About | Core",
  description:
    "Core is a consultancy and technology business focused on human performance and operational excellence across UK and Dubai.",
};

const people = [
  {
    name: "Darryl",
    role: "Founder & Director",
    bullets: [
      "Director-level operational leadership experience",
      "Middle East project turnaround experience",
      "Expertise in operations, planning, and performance",
      "MBA (strategic focus)",
      "Multiple-time nationally recognised Innovation Winner",
    ],
  },
  {
    name: "Will",
    role: "Strategic Partner",
    bullets: [
      "Strategic partner supporting growth and development",
      "Former PwC",
      "CFO",
      "Angel investor",
      "Proven portfolio of SaaS businesses",
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Core"
        title={
          <>
            A consultancy and technology business,{" "}
            <span className="italic text-accent">built by operators.</span>
          </>
        }
        subtitle="Focused on human performance and operational excellence in safety-critical environments across the UK and Middle East."
      />

      <section className="bg-white py-24 lg:py-32">
        <div className="container-core grid lg:grid-cols-12 gap-12 items-start">
          <Reveal className="lg:col-span-5 lg:sticky lg:top-32">
            <span className="eyebrow mb-6">Overview</span>
            <h2 className="heading-display text-4xl lg:text-5xl leading-tight mb-6">
              Real delivery, not theory.
            </h2>
          </Reveal>
          <Reveal delay={1} className="lg:col-span-7 space-y-6 text-lg text-ink-700 leading-relaxed">
            <p>
              Core was founded to close the gap between safety strategy and
              operational reality. Our work starts on the ground, in depots,
              control rooms, stations, sites, and hospitals, then scales up
              into system-wide change.
            </p>
            <p>
              The business operates as two complementary engines: immediate
              consulting and advisory, and a modular product ecosystem led by
              the Human Performance Engine. Together they help organisations
              improve safety, reduce risk, and unlock performance.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink-50 py-24 lg:py-32">
        <div className="container-core">
          <Reveal className="mb-16 max-w-3xl">
            <span className="eyebrow mb-6">Leadership</span>
            <h2 className="heading-display text-4xl lg:text-6xl leading-[1.05] text-balance">
              Experience that's been tested under pressure.
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {people.map((p, i) => (
              <Reveal
                key={p.name}
                delay={((i + 1) as 1 | 2)}
                className="bg-white rounded-3xl p-8 lg:p-12 border border-ink-200"
              >
                <div className="flex items-start justify-between mb-10">
                  <div>
                    <div className="heading-display text-4xl lg:text-5xl mb-2">
                      {p.name}
                    </div>
                    <div className="text-sm text-ink-500 uppercase tracking-[0.2em]">
                      {p.role}
                    </div>
                  </div>
                  <div className="h-14 w-14 rounded-full bg-ink-900 text-white flex items-center justify-center text-xl font-display">
                    {p.name[0]}
                  </div>
                </div>
                <ul className="space-y-3 pt-6 border-t border-ink-200">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-ink-700">
                      <span className="text-accent mt-[2px]">+</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 lg:py-32">
        <div className="container-core grid lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-6">
            <span className="eyebrow mb-6">Presence</span>
            <h2 className="heading-display text-4xl lg:text-6xl leading-[1.05] text-balance mb-6">
              UK and Dubai.{" "}
              <span className="italic text-ink-500">Two hubs, one approach.</span>
            </h2>
            <p className="text-lg text-ink-600 leading-relaxed max-w-xl">
              Operating across both regions with experience delivering in
              diverse operational environments, from UK rail and energy to
              Middle East infrastructure turnaround.
            </p>
          </Reveal>
          <Reveal delay={1} className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <Image
                  src="/section5/3.webp"
                  alt="City and infrastructure"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mt-8">
                <Image
                  src="/hero_section/3.webp"
                  alt="Desert rail operations"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
