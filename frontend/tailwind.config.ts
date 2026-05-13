import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./features/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "3rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        "deep-forest": "#0F1F1A",
        "deep-forest-soft": "#1F3A2E",
        "rooted-green": "#2F6B4F",
        "rooted-green-deep": "#234F3B",
        "soft-sage": "#A8BFA4",
        "warm-sand": "#F4EFE6",
        ivory: "#FAF7F0",
        clay: "#C98863",
        "soft-gold": "#D8B76A",
        "soft-gold-deep": "#B8965A",
        "charcoal-ink": "#1D1D1B",
        "muted-gray": "#6F766F",
        "soft-mist": "#EEF3ED",
        error: "#B9473E",
        success: "#2F6B4F",
      },
      fontFamily: {
        sans: ["var(--font-nunito)", "system-ui", "sans-serif"],
        display: ["var(--font-comfortaa)", "var(--font-nunito)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #0F1F1A 0%, #1F3A2E 50%, #2F6B4F 100%)",
        "soft-section":
          "linear-gradient(180deg, #FAF7F0 0%, #F4EFE6 100%)",
        "card-glow":
          "radial-gradient(circle at top left, rgba(216,183,106,0.18), transparent 35%), linear-gradient(180deg, #FAF7F0 0%, #F4EFE6 100%)",
        "sage-soft":
          "linear-gradient(180deg, #EEF3ED 0%, #F4EFE6 100%)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(15,31,26,0.04), 0 8px 24px rgba(15,31,26,0.06)",
        glow: "0 10px 30px rgba(47,107,79,0.18)",
        ring: "0 0 0 1px rgba(15,31,26,0.06)",
      },
      letterSpacing: {
        "premium": "-0.02em",
      },
      maxWidth: {
        prose: "70ch",
      },
    },
  },
  plugins: [],
};

export default config;
