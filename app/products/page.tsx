import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import FinalCTA from "@/components/FinalCTA";

export const metadata = {
  title: "Products | Core",
  description:
    "Human Performance Engine, Smart Safety & Performance Station, Environmental Risk & Sand Mitigation System, and bespoke systems from Core.",
};

const modules = [
  { label: "Fatigue Management", phase: "Current" },
  { label: "Competency Management", phase: "Current" },
  { label: "Resource Planning", phase: "Future" },
  { label: "Performance Analytics", phase: "Future" },
  { label: "Document Management Systems", phase: "Future" },
  { label: "Asset Management Systems", phase: "Future" },
];

const products = [
  {
    id: "smart-station",
    name: "Smart Safety & Performance Station",
    tagline: "Depot and site interface for safer, smarter operations.",
    body: "A physical and digital checkpoint at the point of work that consolidates sign-in, briefings, key documents, KPIs, and biometrics in one place.",
    features: [
      "Digital sign-in",
      "Safety briefings and documents",
      "Live KPIs",
      "Biometrics",
    ],
    image: "/section4/4.webp",
  },
  {
    id: "sand",
    name: "Environmental Risk & Sand Mitigation System",
    tagline: "Built for desert infrastructure environments.",
    body: "Wind, weather, and sand-risk monitoring with early warning alerts to protect assets, operations, and schedule in high-exposure environments.",
    features: [
      "Wind and weather monitoring",
      "Sand risk analysis",
      "Early warning alerts",
      "Desert-grade infrastructure design",
    ],
    image: "/section4/2.webp",
  },
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products & systems"
        title={
          <>
            A modular ecosystem for{" "}
            <span className="italic text-accent">human performance at scale.</span>
          </>
        }
        subtitle="Led by the Human Performance Engine, a next-generation platform combining fatigue, competency, and performance data into one intelligent system."
      />

      {/* Flagship */}
      <section id="hpe" className="bg-white py-24">
        <div className="container-core">
          <Reveal className="rounded-3xl overflow-hidden bg-gradient-to-br from-ink-800 to-ink-900 text-white">
            <div className="grid lg:grid-cols-12">
              <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-8">
                  <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-accent">
                    Flagship
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-white/70">
                    Pilot phase
                  </span>
                </div>
                <h2 className="heading-display text-white text-4xl lg:text-6xl leading-[1.02] mb-6">
                  Human Performance Engine
                </h2>
                <p className="text-lg text-ink-300 leading-relaxed mb-10 max-w-lg">
                  A modular system designed to optimise workforce performance
                  in safety-critical environments, combining fatigue,
                  competency, and performance data into one intelligent
                  platform.
                </p>

                <div className="grid grid-cols-2 gap-x-6 gap-y-0 mb-10 max-w-lg">
                  {modules.map((m) => (
                    <div
                      key={m.label}
                      className="flex items-center gap-3 py-3 border-t border-white/10"
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          m.phase === "Current" ? "bg-accent" : "bg-white/20"
                        }`}
                      />
                      <div>
                        <div className="text-sm text-white">{m.label}</div>
                        <div className="text-[10px] uppercase tracking-[0.18em] text-ink-400">
                          {m.phase} phase
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link href="/contact?type=pilot" className="btn-dark-primary">
                    Become a Pilot Partner
                  </Link>
                  <Link href="/contact?type=product" className="btn-dark-secondary">
                    Product Enquiry
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6 relative min-h-[400px] lg:min-h-[720px] bg-ink-800">
                <Image
                  src="/section4/1.webp"
                  alt="Human Performance Engine dashboard"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Other products */}
      <section className="bg-ink-50 py-24">
        <div className="container-core space-y-10">
          {products.map((p, i) => (
            <Reveal
              key={p.id}
              delay={((i + 1) as 1 | 2)}
            >
              <article
                id={p.id}
                className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white rounded-3xl p-8 lg:p-12 border border-ink-200"
              >
                <div
                  className={`relative aspect-[4/3] rounded-2xl overflow-hidden lg:col-span-5 ${
                    i % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
                <div className="lg:col-span-7">
                  <h3 className="heading-display text-3xl lg:text-4xl leading-tight mb-3">
                    {p.name}
                  </h3>
                  <p className="text-ink-500 italic mb-6">{p.tagline}</p>
                  <p className="text-base text-ink-700 leading-relaxed mb-8 max-w-xl">
                    {p.body}
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                    {p.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-sm text-ink-700"
                      >
                        <span className="text-accent mt-[2px]">+</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}

          <Reveal
            id="bespoke"
            className="rounded-3xl bg-ink-900 text-white p-8 lg:p-16 relative overflow-hidden"
          >
            <div
              aria-hidden
              className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-accent/20 blur-3xl"
            />
            <div className="relative grid lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8">
                <span className="eyebrow mb-6 !text-white/60">Bespoke systems</span>
                <h3 className="heading-display text-white text-3xl lg:text-5xl leading-tight mb-4">
                  Custom-built, where off-the-shelf falls short.
                </h3>
                <p className="text-lg text-ink-300 leading-relaxed max-w-2xl">
                  Bespoke solutions engineered for your client, site, and
                  environmental context, particularly in harsh and high-risk
                  environments.
                </p>
              </div>
              <div className="lg:col-span-4 lg:text-right">
                <Link href="/contact?type=product" className="btn-dark-primary">
                  Discuss a bespoke system
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
