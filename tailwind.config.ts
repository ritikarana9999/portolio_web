import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#050508",
        lavender: "#c084fc",
        "baby-blue": "#93c5fd",
        "soft-pink": "#f9a8d4",
        cyan: "#22d3ee",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        pixel: ["var(--font-vt323)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
