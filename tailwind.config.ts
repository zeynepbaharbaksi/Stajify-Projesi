import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#166534",
          800: "#14532d",
          900: "#052e16",
        },
        surface: {
          DEFAULT: "#0f172a",
          muted: "#1e293b",
          card: "#111827",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        glow: "0 10px 30px -16px rgb(22 101 52 / 0.25), 0 2px 10px -6px rgb(15 23 42 / 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
