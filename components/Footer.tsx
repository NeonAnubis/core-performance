import Link from "next/link";
import Logo from "./Logo";

const columns = [
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/case-studies", label: "Case Studies" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "/services#human-factors", label: "Human Factors & Performance" },
      { href: "/services#iso", label: "ISO & Compliance" },
      { href: "/services#audits", label: "Audits & Reviews" },
      { href: "/services#improvement", label: "Continuous Improvement" },
      { href: "/services#competency", label: "Competency & Training" },
    ],
  },
  {
    title: "Products",
    links: [
      { href: "/products#hpe", label: "Human Performance Engine" },
      { href: "/products#smart-station", label: "Smart Safety Station" },
      { href: "/products#sand", label: "Sand Mitigation System" },
      { href: "/products#bespoke", label: "Bespoke Systems" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-ink-200 pt-24 pb-10 relative overflow-hidden">
      <div className="container-core relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          <div className="md:col-span-5 space-y-6">
            <Logo variant="light" />
            <p className="text-ink-300 text-sm max-w-sm leading-relaxed">
              A high-level consultancy and technology business focused on
              optimising human performance in safety-critical operations.
            </p>
            <div className="flex items-center gap-6 pt-2">
              <div className="text-sm">
                <div className="text-ink-400 text-xs uppercase tracking-[0.2em] mb-1">UK</div>
                <div className="text-white">London</div>
              </div>
              <div className="h-10 w-px bg-white/10" />
              <div className="text-sm">
                <div className="text-ink-400 text-xs uppercase tracking-[0.2em] mb-1">Middle East</div>
                <div className="text-white">Dubai</div>
              </div>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <h4 className="text-white text-xs font-medium uppercase tracking-[0.2em] mb-5">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-ink-300 hover:text-white transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-1">
            <h4 className="text-white text-xs font-medium uppercase tracking-[0.2em] mb-5">
              Connect
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ink-300 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@coreperformancesystems.com"
                  className="text-sm text-ink-300 hover:text-white transition-colors"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-8 text-xs text-ink-400">
          <p>© {new Date().getFullYear()} Core. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>

      {/* Big background type */}
      <div
        aria-hidden
        className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-[26vw] leading-none font-bold text-white/[0.03] pointer-events-none select-none tracking-tightest"
      >
        core<span className="text-accent/20">+</span>
      </div>
    </footer>
  );
}
