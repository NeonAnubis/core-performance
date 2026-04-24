import Image from "next/image";
import Link from "next/link";
import type { SVGProps } from "react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import FinalCTA from "@/components/FinalCTA";

export const metadata = {
  title: "Portfolio & Case Studies | Core",
  description:
    "Product, Innovations, Projects & Operational Transformation Portfolio. Delivering measurable improvements in safety, performance, and operational efficiency across complex industry and safety-critical environments.",
};

/* -------------------- Data -------------------- */

type CaseStudy = {
  num: string;
  tag: string;
  title: string;
  client?: string;
  image: string;
  imageAlt: string;
  headlineStat: string;
  statLabel: string;
  situation: string[];
  actions: { title: string; points: string[] }[];
  impact: string[];
  strategicValue: string[];
};

const cases: CaseStudy[] = [
  {
    num: "01",
    tag: "Growth",
    title: "Strategic Growth & Data Transformation of Infrastructure Operations",
    client: "Iarnród Éireann · Irish Rail",
    image: "/case_studies/case1.webp",
    imageAlt: "Rail engineer using augmented reality on the network",
    headlineStat: "€50M → €150M",
    statLabel: "Contract value transformation",
    situation: [
      "Operating under a multi-year contract with Iarnród Éireann (Irish Rail), the business relied heavily on traditional on-track machine (OTM) operations as its primary revenue source.",
      "Emerging industry trends created clear strategic risks: increasing focus on environmental performance and emissions reduction, pressure to maximise train availability on the network, and a shift towards data-driven maintenance and decision-making.",
      "These factors indicated a future where traditional maintenance volumes could decline, placing the existing business model at risk.",
    ],
    actions: [
      {
        title: "Strategic Insight",
        points: [
          "Recognised that long-term value would shift from volume-based maintenance to data-led, precision-based operations.",
          "Identified the opportunity to enter the rail data and surveying market and align directly with client strategic priorities.",
        ],
      },
      {
        title: "Business Model Transformation",
        points: [
          "Developed a dual-value model: higher-quality, lower-volume maintenance paired with a new revenue stream through data services.",
          "Repositioned machines from maintenance tools into mobile data acquisition platforms.",
        ],
      },
      {
        title: "Stakeholder Engagement",
        points: [
          "Engaged senior stakeholders within Irish Rail, aligning strategy with reduced emissions, increased network capacity, and improved safety.",
          "Successfully positioned a shift towards fewer interventions and higher quality outcomes.",
        ],
      },
      {
        title: "Operational Implementation",
        points: [
          "Introduced trial programmes integrating surveying capability into operations and upskilled operators for data collection.",
          "Developed the 'Design Transposition' approach, where every tamping shift became a data-driven design shift.",
          "Transitioned machines into hybrid maintenance and data platforms.",
        ],
      },
    ],
    impact: [
      "Contract value increased from €50M to €150M",
      "Established new business unit: Digital Rail Services",
      "Maintained operational output while significantly increasing value per shift",
      "Improved safety through reduced manual inspection requirements",
      "Increased network capacity through fewer track possessions",
      "Reduced environmental impact through transition to HVO fuel",
    ],
    strategicValue: [
      "Demonstrates ability to anticipate industry change and act ahead of it.",
      "Delivered business model transformation, not just operational improvement.",
      "Strong stakeholder influence at senior and strategic levels.",
      "Positioned the organisation for a data-driven future in rail infrastructure.",
    ],
  },
  {
    num: "02",
    tag: "Innovation & Efficiency",
    title: "High-Performance Operating Model for Continuous Production",
    client: "Irish Rail · Ballast cleaning programme",
    image: "/case_studies/case2.webp",
    imageAlt: "Ballast cleaning machine in continuous operation on Irish Rail",
    headlineStat: "+60%",
    statLabel: "Output increase · ~40% reduction in delays",
    situation: [
      "Irish Rail set a challenge to operate a ballast cleaning machine continuously for 37 hours.",
      "The existing operating model required 3-hour maintenance shutdowns every 8 hours, causing significant loss of productivity and inefficient use of track access.",
      "Key constraints included mechanical reliability over extended operation, operator fatigue and exposure to dust and weather, and a lack of integration between maintenance and operations.",
    ],
    actions: [
      {
        title: "Human-Centred Redesign",
        points: [
          "Re-engineered the operator environment: camera systems enabling remote operation, relocated operators into enclosed positive-pressure cabins, and eliminated exposure to dust and harsh weather.",
          "Improved working conditions enabled sustained performance over extended durations while enhancing safety, comfort, and focus.",
        ],
      },
      {
        title: "Dynamic Maintenance Model",
        points: [
          "Replaced static maintenance with a risk-based, dynamic system.",
          "On-the-move monitoring with continuous temperature and visual checks.",
          "Short 'pit stop' interventions of 5 to 10 minutes for critical checks.",
          "Planned 20-minute structured inspections where required.",
        ],
      },
      {
        title: "Workforce Integration",
        points: [
          "Introduced a technician-operator model combining operational and mechanical competencies.",
          "Enabled real-time intervention and improved mechanical sympathy.",
        ],
      },
      {
        title: "System Optimisation",
        points: [
          "Enhanced decision-making through ground-penetrating radar data and improved visibility of ballast conditions.",
          "Increased efficiency through strategic tool placement across the machine, reducing downtime during interventions.",
        ],
      },
    ],
    impact: [
      "+60% increase in output",
      "~40% reduction in delays through improved reliability and availability",
      "Successful delivery of the continuous 37-hour operation target",
      "Improved machine condition through better handling and maintenance",
      "Enhanced operator wellbeing and performance",
      "Elimination of inefficient downtime cycles",
    ],
    strategicValue: [
      "Demonstrates ability to redesign complex operational systems under constraint.",
      "Strong integration of human performance, engineering, and data-driven decision-making.",
      "Delivered a step-change improvement in productivity and reliability.",
      "Established a scalable model for high-performance rail operations.",
    ],
  },
  {
    num: "03",
    tag: "Digital Transformation",
    title: "Digital Fit-for-Duty & Control System",
    client: "Distributed fleet operations",
    image: "/case_studies/case3.webp",
    imageAlt: "Biometric Digital Safety & Performance Station in a depot",
    headlineStat: "100%",
    statLabel: "Safety engagement · industry award",
    situation: [
      "Operating a geographically dispersed fleet, regulatory requirements mandated robust assurance that all personnel were fit for duty prior to commencing work.",
      "Unlike traditional rail operations, there was no centralised booking-on location, with machines deployed nationwide. This caused inconsistent fit-for-duty verification, reliance on proposed mobile supervisory checks, increased operational risk, and limited visibility of workforce status.",
      "The regulator's expectation of physical oversight through mobile controllers presented a solution that was resource-intensive, inconsistent, and not scalable.",
    ],
    actions: [
      {
        title: "Control Room Development",
        points: [
          "Established a 24/7 central control room as the operational hub for booking-on and booking-off, incident management, and communication with client and field teams.",
          "Introduced hybrid controllers: dual-skilled personnel with operational and driver competency, capable of supporting real-time decision-making and resource deployment.",
        ],
      },
      {
        title: "Digital Safety & Performance Stations",
        points: [
          "Designed and deployed a network of biometric-enabled safety stations across depots and machines.",
          "Biometric identification with automatic user recognition and personalised system engagement.",
          "Live video booking-on with real-time visual fit-for-duty assessment via control room.",
          "Mandatory safety compliance: forced review and sign-off of all safety notifications.",
        ],
      },
    ],
    impact: [
      "Eliminated requirement for mobile controllers, significantly reducing operational inefficiency",
      "Delivered a scalable, regulator-compliant fit-for-duty assurance model",
      "Achieved full visibility of workforce status across a distributed network",
      "Strengthened safety communication, ensuring 100% engagement with critical updates",
      "Enhanced workforce performance through improved access to information",
      "Recognised with an industry award from Irish Rail",
    ],
    strategicValue: [
      "Demonstrates ability to translate regulatory requirements into scalable digital systems.",
      "Strong integration of human performance, compliance, and operational control.",
      "Established a foundation for future development of the Human Performance Engine.",
      "Showcases leadership in modernising workforce management within safety-critical environments.",
    ],
  },
  {
    num: "04",
    tag: "Governance",
    title: "Regulatory Transformation & Workforce Optimisation: Rulebook Change",
    client: "Irish Rail · Commission for Railway Regulation",
    image: "/case_studies/case4.webp",
    imageAlt: "Commission for Railway Regulation, rulebook transformation",
    headlineStat: "1st",
    statLabel: "External contractor to influence rulebook change",
    situation: [
      "Rail operations in Ireland required two fully qualified drivers per machine, as mandated by national railway rules.",
      "Operational demand was highly variable throughout the year, creating inefficient workforce utilisation during lower demand periods, resource shortages during peak periods, increased exposure to fatigue and sickness, and a requirement to overstaff to maintain resilience.",
      "The existing model lacked flexibility and placed pressure on both operational delivery and workforce sustainability.",
    ],
    actions: [
      {
        title: "Role Redefinition & Risk Assessment",
        points: [
          "Detailed analysis identified the second driver role primarily functioned as monitoring, oversight, contingency support, and operational assistance.",
          "Developed a new Driver's Assistant role, a competency-based role designed to safely fulfil support functions without requiring full driver qualification.",
          "Undertook a full risk assessment to validate safety and operational viability.",
        ],
      },
      {
        title: "Competency & Assurance Framework",
        points: [
          "Task-specific training aligned to operational requirements.",
          "Psychometric assessment to ensure suitability.",
          "Defined competency standards and ongoing assessment.",
          "Ensured full alignment with safety and compliance expectations.",
        ],
      },
      {
        title: "Regulatory & Stakeholder Engagement",
        points: [
          "Engaged extensively with Irish Rail, Commission for Railway Regulation, and insurance and risk bodies.",
          "Presented a structured, evidence-based case for change, combining risk-based justification, operational efficiency benefits, and maintained safety integrity.",
          "Built consensus and secured support across all parties.",
        ],
      },
      {
        title: "Rulebook Transformation",
        points: [
          "Led a formal request to amend the national railway rulebook.",
          "Successfully achieved regulatory approval to replace the two-driver requirement with a Driver + Driver's Assistant model.",
          "First instance of an external contractor successfully influencing rulebook change at this level.",
        ],
      },
    ],
    impact: [
      "Significantly increased workforce flexibility across operations",
      "Enabled more efficient resource planning aligned to demand variability",
      "Reduced reliance on overstaffing, lowering operational costs",
      "Improved resilience to sickness, fatigue, and operational disruption",
      "Maintained full compliance with safety and regulatory standards",
    ],
    strategicValue: [
      "Demonstrates ability to challenge and reshape established regulatory frameworks.",
      "Strong stakeholder engagement and influence at senior and regulatory levels.",
      "Delivered alignment between safety, compliance, and commercial performance.",
      "Showcases leadership in delivering systemic change beyond operational constraints.",
    ],
  },
  {
    num: "05",
    tag: "Project Management",
    title: "Predictive Operations & Environmental Risk Management: Sand Mitigation Strategy",
    client: "Heavy-haul railway, Abu Dhabi",
    image: "/case_studies/case5.webp",
    imageAlt: "Desert sand monitoring station in Abu Dhabi",
    headlineStat: "5 to 10 days",
    statLabel: "Predictive visibility of wind and sand events",
    situation: [
      "During early operations of a heavy-haul railway in Abu Dhabi, recurring sandstorms posed a significant threat to operational reliability and safety.",
      "Sand accumulation on the track resulted in train delays, increased safety risk where infrastructure became partially buried, and reactive maintenance interventions with high resource demand.",
      "Early approaches focused on removing sand after it reached the railway, which proved inefficient, costly, and operationally disruptive.",
    ],
    actions: [
      {
        title: "Problem Reframing & Environmental Analysis",
        points: [
          "Challenged the conventional approach of improving sand removal capability, since intervention after sand reached the railway was too late.",
          "Led research into sand movement patterns, wind behaviour, and seasonal trends.",
          "Installed local weather monitoring stations to capture real-time environmental data.",
        ],
      },
      {
        title: "Predictive Risk Modelling",
        points: [
          "Developed a forward-looking risk model combining local weather station data with external forecasting sources.",
          "Enabled 5 to 10 day visibility of wind conditions and identification of high-risk areas before impact.",
          "Introduced a proactive alert system to trigger early intervention.",
        ],
      },
      {
        title: "Engineering & Mitigation Design",
        points: [
          "Designed location-specific mitigation solutions based on sand type, wind direction, and terrain conditions.",
          "Implemented fencing and barriers to slow, divert, and trap sand.",
          "Introduced controlled sand accumulation zones to improve removal efficiency.",
        ],
      },
      {
        title: "Operational Integration",
        points: [
          "Redesigned the maintenance strategy to align with predictive insights.",
          "Pre-positioning of resources ahead of sand events.",
          "Targeted interventions in high-risk areas and reduction of reactive, emergency-based work.",
        ],
      },
    ],
    impact: [
      "Near elimination of sand-related delays and operational disruption",
      "Significant reduction in reactive maintenance and associated costs",
      "Improved safety by reducing exposure to extreme environmental conditions",
      "Enhanced planning accuracy and resource deployment",
      "Established a fully preventative, intelligence-led maintenance model",
    ],
    strategicValue: [
      "Demonstrates ability to shift operations from reactive to predictive systems.",
      "Strong integration of environmental data, engineering, and operational planning.",
      "Showcases strategic thinking in high-risk, complex environments.",
      "Delivered scalable, long-term improvement in reliability and performance.",
    ],
  },
];

const capabilities: { name: string; Icon: (p: SVGProps<SVGSVGElement>) => JSX.Element }[] = [
  { name: "Operational Transformation", Icon: IconRefresh },
  { name: "Strategic Growth & Business Model Development", Icon: IconTrend },
  { name: "Performance Optimisation in Safety-Critical Environments", Icon: IconShield },
  { name: "Predictive Maintenance & Data-Driven Decision Making", Icon: IconChart },
  { name: "Human Factors & Workforce Performance", Icon: IconPeople },
  { name: "Regulatory Engagement & Compliance Leadership", Icon: IconCheck },
  { name: "Digital Systems Integration & Innovation", Icon: IconCpu },
];

/* -------------------- Page -------------------- */

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title={
          <>
            Product, innovations, projects &{" "}
            <span className="italic text-accent">operational transformation.</span>
          </>
        }
        subtitle="Delivering measurable improvements in safety, performance, and operational efficiency across complex industry and safety-critical environments."
      />

      {/* ============== Profile ============== */}
      <ProfileSection />

      {/* ============== Methodology ============== */}
      <MethodologySection />

      {/* ============== Case studies intro ============== */}
      <section className="bg-white pt-24 lg:pt-32 pb-8">
        <div className="container-core">
          <Reveal className="max-w-[82rem] mx-auto">
            <span className="eyebrow mb-5">Portfolio</span>
            <h2 className="font-sans font-black text-3xl sm:text-4xl lg:text-5xl leading-[1.1] tracking-[-0.02em] max-w-4xl">
              Key strategic & operational{" "}
              <span className="italic text-accent">case studies.</span>
            </h2>
            <p className="mt-5 text-base lg:text-lg text-ink-600 leading-relaxed max-w-2xl">
              Five proven transformation projects, end-to-end. From challenge
              and context through to quantified impact and strategic value.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============== Cases ============== */}
      <section className="bg-white pb-20 lg:pb-28">
        <div className="container-core">
          <div className="max-w-[82rem] mx-auto space-y-20 lg:space-y-28">
            {cases.map((c, i) => (
              <CaseBlock key={c.num} data={c} reverse={i % 2 === 1} />
            ))}
          </div>
        </div>
      </section>

      {/* ============== Core capabilities ============== */}
      <CapabilitiesSection />

      <FinalCTA />
    </>
  );
}

/* -------------------- Profile -------------------- */

function ProfileSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-core">
        <div className="max-w-[82rem] mx-auto grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <Reveal className="lg:col-span-5">
            <div className="relative w-full max-w-md mx-auto lg:mx-0">
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-6 -right-6 h-40 w-40 rounded-full bg-accent/20 blur-3xl"
              />
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-ink-100">
                <Image
                  src="/case_studies/Darryl_Gwilliam.webp"
                  alt="Darryl Gwilliam, Operational Performance & Transformation Leader"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 80vw, 40vw"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={1} className="lg:col-span-7">
            <span className="eyebrow mb-5">Profile</span>
            <h2 className="font-sans font-black text-3xl sm:text-4xl lg:text-5xl leading-[1.1] tracking-[-0.02em] text-ink-900">
              Darryl Gwilliam
            </h2>
            <p className="mt-3 text-base lg:text-lg text-accent font-semibold">
              Operational Performance & Transformation Leader
            </p>

            <div className="mt-7 space-y-5 text-ink-600 leading-relaxed">
              <p>
                Director-level leader specialising in operational performance,
                safety-critical systems, and transformation, with a strong focus
                on driving growth, continuous improvement, and measurable
                performance outcomes.
              </p>
              <p>
                Proven track record delivering large-scale improvements across
                industry and complex environments through digital innovation,
                predictive maintenance strategies, and high-performance
                operating models.
              </p>
              <p>
                Combines human factors, compliance, and stakeholder engagement
                to deliver safe, efficient, and reliable operations in
                high-risk, high-demand environments.
              </p>
              <p className="text-ink-700 border-l-2 border-accent pl-4">
                Currently developing a{" "}
                <strong className="text-ink-900">Human Performance Engine</strong>,
                a data-driven framework designed to optimise workforce
                performance, fatigue, competency, and operational
                decision-making, translating real-world challenges into scalable
                digital solutions.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* -------------------- Methodology -------------------- */

function MethodologySection() {
  return (
    <section className="bg-ink-50 py-20 lg:py-28 relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #0A0A0B 1px, transparent 1px), linear-gradient(to bottom, #0A0A0B 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="container-core relative">
        <div className="max-w-[82rem] mx-auto">
          <Reveal className="max-w-3xl mb-10 lg:mb-14">
            <span className="eyebrow mb-5">Methodology</span>
            <h2 className="font-sans font-black text-3xl sm:text-4xl lg:text-5xl leading-[1.1] tracking-[-0.02em] text-ink-900">
              A structured, engagement-led approach to{" "}
              <span className="italic text-accent">transformation.</span>
            </h2>
            <p className="mt-5 text-base lg:text-lg text-ink-600 leading-relaxed">
              Ensuring solutions are practical, scalable, and aligned with
              real-world needs.
            </p>
          </Reveal>

          {/* Six-step framework visual */}
          <Reveal delay={1}>
            <div className="relative rounded-3xl border border-ink-200 bg-white p-6 sm:p-10 lg:p-14 shadow-[0_1px_0_rgba(10,10,11,0.04),0_24px_48px_-24px_rgba(10,10,11,0.12)]">
              <div className="flex items-center justify-between mb-8 lg:mb-10">
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-ink-400">
                  Six-step framework
                </span>
                <span className="hidden sm:inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-ink-400">
                  Engage
                  <svg width="10" height="8" viewBox="0 0 16 12" fill="none" aria-hidden>
                    <path d="M1 6h13M10 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Optimise
                </span>
              </div>
              <div className="relative w-full aspect-[2000/511]">
                <Image
                  src="/case_studies/Methodology.webp"
                  alt="Methodology: Engage, Reframe, Align, Build, Deliver, Optimise"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 92vw, 82rem"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* -------------------- Case block -------------------- */

function CaseBlock({ data: c, reverse }: { data: CaseStudy; reverse: boolean }) {
  return (
    <article className="group">
      {/* Header row */}
      <Reveal className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-5">
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
            <span className="font-mono text-ink-400 text-xs">Case {c.num}</span>
            <span className="inline-block h-px w-6 bg-ink-300" />
            {c.tag}
          </span>
        </div>
        <h3 className="font-sans font-black text-[1.75rem] sm:text-[2rem] lg:text-[2.625rem] xl:text-[2.875rem] leading-[1.1] tracking-[-0.02em] text-ink-900 max-w-4xl text-balance">
          {c.title}
        </h3>
        {c.client && (
          <p className="mt-3 text-sm text-ink-500">
            <span className="text-ink-400">Client / context · </span>
            {c.client}
          </p>
        )}
      </Reveal>

      {/* Image + headline stat */}
      <Reveal delay={1} className="mb-12">
        <div
          className={`grid lg:grid-cols-12 gap-5 lg:gap-6 items-stretch ${
            reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <div className="lg:col-span-7 relative aspect-[16/10] rounded-3xl overflow-hidden bg-ink-100">
            <Image
              src={c.image}
              alt={c.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
          </div>
          <div className="lg:col-span-5 relative rounded-3xl bg-ink-900 text-white p-7 sm:p-9 lg:p-10 flex flex-col justify-between overflow-hidden">
            <div
              aria-hidden
              className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-accent/20 blur-3xl pointer-events-none"
            />
            <div className="relative">
              <div className="text-[11px] uppercase tracking-[0.22em] text-white/50 mb-4">
                Headline impact
              </div>
              <div className="font-sans font-black text-[2.5rem] sm:text-[3rem] lg:text-[3.25rem] xl:text-[3.75rem] leading-[1.02] tracking-[-0.03em] text-white break-words">
                {c.headlineStat}
              </div>
              <p className="mt-5 text-sm text-ink-300 leading-relaxed max-w-xs">
                {c.statLabel}
              </p>
            </div>
            <div className="relative mt-8 pt-6 border-t border-white/10 text-xs text-ink-400">
              <span className="font-mono">Case {c.num} / {cases.length.toString().padStart(2, "0")}</span>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Situation / Action / Impact / Strategic Value */}
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
        <Reveal delay={1} className="lg:col-span-5">
          <SubHead label="Situation" />
          <div className="space-y-4 text-ink-700 leading-relaxed">
            {c.situation.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={2} className="lg:col-span-7">
          <SubHead label="Action" />
          <div className="space-y-6">
            {c.actions.map((a) => (
              <div key={a.title}>
                <h4 className="text-sm font-semibold text-ink-900 mb-2">
                  {a.title}
                </h4>
                <ul className="space-y-2">
                  {a.points.map((p, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-[14px] text-ink-700 leading-relaxed"
                    >
                      <span className="text-accent mt-[2px] shrink-0">+</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal className="mt-12 grid lg:grid-cols-12 gap-8 lg:gap-12">
        <div className="lg:col-span-5">
          <SubHead label="Impact" color="accent" />
          <ul className="space-y-2.5">
            {c.impact.map((p, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5 text-[14px] text-ink-700 leading-relaxed"
              >
                <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-accent/40 text-accent mt-[1px]">
                  <svg width="10" height="10" viewBox="0 0 16 16" fill="none" aria-hidden>
                    <path
                      d="M3.5 8.5L6.5 11.5L12.5 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-7">
          <SubHead label="Strategic Value" />
          <ul className="space-y-2.5">
            {c.strategicValue.map((p, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5 text-[14px] text-ink-700 leading-relaxed"
              >
                <span className="text-accent mt-[2px] shrink-0">+</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </article>
  );
}

function SubHead({ label, color }: { label: string; color?: "accent" }) {
  return (
    <div
      className={`text-[11px] font-semibold uppercase tracking-[0.22em] mb-5 ${
        color === "accent" ? "text-accent" : "text-ink-500"
      }`}
    >
      {label}
    </div>
  );
}

/* -------------------- Capabilities -------------------- */

function CapabilitiesSection() {
  return (
    <section className="bg-ink-50 py-20 lg:py-28">
      <div className="container-core">
        <div className="max-w-[82rem] mx-auto">
          <Reveal className="max-w-3xl mb-12">
            <span className="eyebrow mb-5">Core Capabilities</span>
            <h2 className="font-sans font-black text-3xl sm:text-4xl lg:text-5xl leading-[1.1] tracking-[-0.02em] text-ink-900">
              Proven across{" "}
              <span className="italic text-accent">complex environments.</span>
            </h2>
            <p className="mt-5 text-base lg:text-lg text-ink-600 leading-relaxed">
              Delivering measurable improvements in performance, safety, and
              commercial outcomes across safety-critical operational
              environments.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {capabilities.map(({ name, Icon }, i) => (
              <Reveal
                key={name}
                delay={((i % 3) + 1) as 1 | 2 | 3}
                className="group relative rounded-2xl bg-white p-6 lg:p-7 border border-ink-200 hover:border-ink-900 transition-colors duration-500 flex items-start gap-4"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-500">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="font-sans font-semibold text-[15px] lg:text-base text-ink-900 leading-snug pt-1.5">
                  {name}
                </span>
              </Reveal>
            ))}
          </div>

          <Reveal delay={2} className="mt-16">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-ink-900 text-white px-6 py-3.5 text-sm font-semibold hover:bg-accent transition-colors hover:-translate-y-px duration-300"
            >
              Discuss a transformation project
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
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* -------------------- Capability icons -------------------- */

function IconRefresh(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...p}>
      <path d="M4 4v6h6M20 20v-6h-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 10a8 8 0 0 1 14-4M20 14a8 8 0 0 1-14 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconTrend(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...p}>
      <path d="M3 17l6-6 4 4 8-8M13 7h8v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconShield(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...p}>
      <path d="M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconChart(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...p}>
      <path d="M4 20V10M10 20V4M16 20v-8M22 20H2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconPeople(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...p}>
      <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3 20c0-3 3-5 6-5s6 2 6 5M15 20c0-2 1.5-3.5 4-3.5s3 1.5 3 3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
function IconCheck(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...p}>
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}
function IconCpu(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...p}>
      <rect x="6" y="6" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <rect x="9" y="9" width="6" height="6" stroke="currentColor" strokeWidth="1.8" />
      <path d="M10 3v3M14 3v3M10 18v3M14 18v3M3 10h3M3 14h3M18 10h3M18 14h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
