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
        "brand-black": "#141414",
        "brand-card": "#222222",
        "brand-gold": "#C9A030",
        "brand-gold-light": "#E8C04A",
        "brand-white": "#F5F5F5",
        "brand-muted": "#999999",
        "brand-badge": "#2A2A2A",
      },
      fontFamily: {
        bebas: ["var(--font-bebas)", "sans-serif"],
        pacifico: ["var(--font-pacifico)", "cursive"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.2em",
      },
      boxShadow: {
        card: "0 4px 24px 0 rgba(0,0,0,0.5)",
        "card-hover": "0 8px 32px 0 rgba(201,160,48,0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
