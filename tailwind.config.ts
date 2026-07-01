import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0a192f",
        "navy-light": "#112240",
        "navy-lighter": "#233554",
        "dark-slate": "#495670",
        slate: "#8892b0",
        "light-slate": "#a8b2d8",
        "lightest-slate": "#ccd6f6",
        white: "#e6f1ff",
        green: "#64ffda",
        "green-tint": "rgba(100,255,218,0.1)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "SF Mono", "Fira Code", "monospace"],
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
