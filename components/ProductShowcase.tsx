import Image from "next/image";
import Link from "next/link";
import type { SVGProps } from "react";
import Reveal from "./Reveal";

type Product = {
  href: string;
  image: string;
  Icon: (p: SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
  description: string;
  features: string[];
};

const products: Product[] = [
  {
    href: "/products#hpe",
    image: "/section4/1.webp",
    Icon: IconChart,
    title: "Human Performance Engine",
    description:
      "A next-generation platform combining fatigue, competency, and performance data into one intelligent system.",
    features: [
      "Fatigue management",
      "Competency tracking",
      "Performance analytics",
      "Pilot-ready deployment",
    ],
  },
  {
    href: "/products#smart-station",
    image: "/section4/4.webp",
    Icon: IconShield,
    title: "Smart Safety & Performance Station",
    description:
      "Depot and site interface that consolidates sign-in, briefings, documents, KPIs, and biometrics at the point of work.",
    features: [
      "Digital sign-in & access control",
      "Safety briefings & documents",
      "Live KPIs & dashboards",
      "Biometric identification",
    ],
  },
  {
    href: "/products#sand",
    image: "/section4/2.webp",
    Icon: IconWind,
    title: "Environmental Risk & Sand Mitigation",
    description:
      "Wind, weather, and sand-risk monitoring with early warning alerts, built for desert infrastructure environments.",
    features: [
      "Wind & weather monitoring",
      "Sand activity analysis",
      "Threshold-based alerts",
      "Desert-grade infrastructure",
    ],
  },
];

export default function ProductShowcase() {
  return (
    <section className="bg-[#0A0F17] text-white pt-4 pb-24 lg:pb-32 relative overflow-hidden">
      <div className="container-core relative">
        {/* Section header */}
        <div className="mx-auto max-w-[82rem] flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10">
          <div>
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Our Products
            </span>
            <h2 className="mt-3 font-sans font-black text-3xl sm:text-[2rem] lg:text-[2.25rem] leading-[1.1] tracking-[-0.02em] text-white lg:whitespace-nowrap">
              Intelligent solutions for every operational challenge.
            </h2>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-white transition-colors self-start md:self-end whitespace-nowrap"
          >
            View all products
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        {/* Cards grid — centered, sized as if 4-up so 3 sit comfortably */}
        <div className="mx-auto max-w-[82rem] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map(({ href, image, Icon, title, description, features }, i) => (
            <Reveal
              key={title}
              delay={((i + 1) as 1 | 2 | 3)}
              className="group relative bg-white rounded-2xl overflow-hidden flex flex-col"
            >
              {/* Product image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Body */}
              <div className="relative p-6 flex flex-col flex-1">
                {/* Icon badge overlaps image/body boundary */}
                <span className="absolute -top-5 left-6 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md">
                  <span className="inline-flex h-[34px] w-[34px] items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Icon className="h-[16px] w-[16px]" />
                  </span>
                </span>

                <h3 className="mt-5 font-sans font-bold text-[17px] lg:text-lg leading-snug tracking-tight text-ink-900">
                  {title}
                </h3>

                <p className="mt-2.5 text-[13px] text-ink-600 leading-relaxed">
                  {description}
                </p>

                <ul className="mt-4 space-y-2">
                  {features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-[13px] text-ink-700"
                    >
                      <span className="inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full border border-ink-200 text-accent mt-[1px]">
                        <svg width="9" height="9" viewBox="0 0 16 16" fill="none" aria-hidden>
                          <path
                            d="M3.5 8.5L6.5 11.5L12.5 5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 pt-4 border-t border-ink-100">
                  <Link
                    href={href}
                    className="inline-flex items-center gap-2 text-[13px] font-semibold text-accent hover:gap-3 transition-all"
                  >
                    Learn more
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function IconChart(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M4 20V10M10 20V4M16 20v-8M22 20H2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconShield(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 12l2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconWind(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M3 8h11a3 3 0 1 0-3-3M3 12h16a3 3 0 1 1-3 3M3 16h9a3 3 0 1 1-3 3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
