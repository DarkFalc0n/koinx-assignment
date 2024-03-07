import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        card: "var(--card)",
        primaryBlue: "var(--primary-blue)",
        tertiaryText: "var(--tertiary-text)",
        secondaryText: "var(--secondary-text)",
        primaryText: "var(--primary-text)",
        primaryGreen: "var(--primary-green)",
        cardGreen: "var(--card-green)",
        cardBlue: "var(--card-blue)",
      },
      backgroundImage: {
        ctaGradient: "var(--cta-gradient)",
        blueGreenGradient: "var(--blue-green-gradient)",
        yellowOrangeGradient: "var(--yellow-orange-gradient)",
      },
    },
  },
  plugins: [],
};
export default config;
