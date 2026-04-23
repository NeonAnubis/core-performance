import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  children?: ReactNode;
};

export default function PageHero({ eyebrow, title, subtitle, children }: Props) {
  return (
    <section className="relative bg-ink-900 text-white pt-40 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[500px] bg-gradient-to-b from-accent/10 to-transparent pointer-events-none"
      />
      <div className="container-core relative">
        <span className="eyebrow mb-6 !text-white/60">{eyebrow}</span>
        <h1 className="heading-display text-white text-5xl sm:text-6xl lg:text-7xl xl:text-[6rem] leading-[1.02] text-balance animate-fade-up max-w-5xl">
          {title}
        </h1>
        {subtitle && (
          <p
            className="mt-8 text-lg lg:text-xl text-ink-300 leading-relaxed max-w-2xl animate-fade-up"
            style={{ animationDelay: "0.15s" }}
          >
            {subtitle}
          </p>
        )}
        {children && (
          <div
            className="mt-12 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
