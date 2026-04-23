"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Pages that start with a dark hero so the header needs light-on-dark styling
  // until the user scrolls past it.
  const darkHeroPaths = ["/", "/about", "/services", "/products", "/case-studies", "/contact"];
  const overDark = !scrolled && !open && darkHeroPaths.includes(pathname ?? "/");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-white/85 backdrop-blur-md border-b border-ink-100"
          : "bg-transparent"
      }`}
    >
      <div className="container-core flex h-20 items-center justify-between">
        <Link
          href="/"
          className={`flex items-center rounded-full transition-all duration-300 ${
            overDark ? "bg-white/95 px-4 py-1.5 shadow-sm" : "bg-transparent px-0 py-0"
          }`}
          aria-label="Core home"
        >
          <Image
            src="/logo.png"
            alt="Core"
            width={2472}
            height={740}
            priority
            className={`w-auto transition-[height] duration-300 ${
              overDark ? "h-8 sm:h-9" : "h-10 sm:h-11"
            }`}
          />
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm transition-colors link-underline ${
                overDark
                  ? "text-white/90 hover:text-white"
                  : "text-ink-700 hover:text-ink-900"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact"
            className={`btn text-sm ${
              overDark
                ? "bg-white text-ink-900 hover:bg-accent hover:text-white"
                : "bg-ink-900 text-white hover:bg-accent"
            } hover:-translate-y-px`}
          >
            Request Consultation
          </Link>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex h-10 w-10 flex-col items-center justify-center gap-1.5"
        >
          <span
            className={`h-px w-6 transition-all duration-300 ${
              open ? "translate-y-[3px] rotate-45 bg-ink-900" : overDark ? "bg-white" : "bg-ink-900"
            }`}
          />
          <span
            className={`h-px w-6 transition-all duration-300 ${
              open ? "-translate-y-[3px] -rotate-45 bg-ink-900" : overDark ? "bg-white" : "bg-ink-900"
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-x-0 top-20 bottom-0 bg-white z-40 transition-all duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="container-core flex flex-col gap-1 pt-8">
          {nav.map((item, idx) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="py-4 text-3xl font-display text-ink-900 border-b border-ink-100"
              style={{ transitionDelay: `${idx * 30}ms` }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="btn-primary mt-8 self-start"
          >
            Request Consultation
          </Link>
        </div>
      </div>
    </header>
  );
}
