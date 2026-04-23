import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0A0A0B",
          50: "#F7F7F8",
          100: "#EEEEF0",
          200: "#D9D9DD",
          300: "#B8B8BF",
          400: "#8A8A93",
          500: "#5E5E66",
          600: "#3F3F46",
          700: "#27272A",
          800: "#18181B",
          900: "#0A0A0B",
        },
        accent: {
          DEFAULT: "#E8463C",
          50: "#FEF2F1",
          100: "#FCE3E1",
          200: "#F8C2BD",
          300: "#F29A92",
          400: "#EC6D62",
          500: "#E8463C",
          600: "#C9352C",
          700: "#A52A23",
          800: "#82221C",
          900: "#5C1813",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      maxWidth: {
        "8xl": "88rem",
      },
      animation: {
        "fade-up": "fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both",
        "fade-in": "fadeIn 1s ease-out both",
        "slide-in": "slideIn 0.9s cubic-bezier(0.16, 1, 0.3, 1) both",
        "marquee": "marquee 40s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
