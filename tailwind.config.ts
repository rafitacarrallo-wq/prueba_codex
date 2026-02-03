import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0b0f14",
        foreground: "#e5e7eb",
        muted: "#94a3b8",
        accent: "#2563eb",
        surface: "#111827",
        border: "#1f2937"
      },
      boxShadow: {
        subtle: "0 1px 2px rgba(15, 23, 42, 0.1)",
        glow: "0 0 0 1px rgba(37, 99, 235, 0.4)"
      }
    }
  },
  plugins: []
};

export default config;
