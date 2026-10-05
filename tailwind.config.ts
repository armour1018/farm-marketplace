import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f5f8ee",
          100: "#e5eed0",
          500: "#7ca93d",
          600: "#5e8d2f",
          700: "#4f7528",
          900: "#2b3d1a",
        },
        earth: {
          50: "#fdfbf7",
          100: "#f5efe3",
          200: "#ebdcc2",
          300: "#dcbf8c",
          500: "#ab7b38",
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(32, 44, 27, 0.08)",
      },
      backgroundImage: {
        hero: "radial-gradient(circle at top, rgba(124,169,61,0.18), transparent 40%), linear-gradient(135deg, #f8f5ee 0%, #eef7ea 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
