type Props = {
  className?: string;
  variant?: "dark" | "light";
};

export default function Logo({ className = "", variant = "dark" }: Props) {
  const textColor = variant === "dark" ? "text-ink-900" : "text-white";
  return (
    <span
      className={`inline-flex items-baseline font-sans text-2xl font-bold tracking-tight ${textColor} ${className}`}
      aria-label="Core"
    >
      <span className="lowercase">core</span>
      <span className="text-accent ml-[1px] font-bold">+</span>
    </span>
  );
}
