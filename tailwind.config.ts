import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0a0e14",
        "ink-raised": "#0f1622",
        "ink-line": "#1c2536",
        mist: "#8996a8",
        paper: "#cfd8e6",
        bright: "#eef2f8",
        signal: "#ffb454",
        "signal-dim": "#3a2f1c",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
