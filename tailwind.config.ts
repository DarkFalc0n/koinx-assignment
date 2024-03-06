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
        secondaryText: "var(--secondary-text)",
        primaryText: "var(--primary-text)",
      },
      backgroundImage: {
        ctaGradient: "var(--cta-gradient)",
      },
    },
  },
  plugins: [],
};
export default config;
