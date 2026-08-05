import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // The existing OrenGen site has its own mature global reset. Keeping
  // Tailwind's reset off lets us introduce shadcn-style components without
  // changing typography, forms, or spacing on unrelated pages.
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        "og-navy": "#00254B",
        "og-navy-deep": "#07111f",
        "og-orange": "#CC5500",
        "og-metal": "#D7E0E8",
      },
      animation: {
        "og-float": "og-float 3.2s ease-in-out infinite",
        "og-sheen": "og-sheen 7s ease-in-out infinite",
      },
      keyframes: {
        "og-float": {
          "0%, 100%": { transform: "translate3d(0, 10px, 0)" },
          "50%": { transform: "translate3d(-10px, -4px, 0)" },
        },
        "og-sheen": {
          "0%, 100%": { transform: "translateX(-120%)" },
          "50%": { transform: "translateX(120%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
