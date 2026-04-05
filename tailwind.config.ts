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
        lumos: {
          black: "#222222",
          chumbo: "#6a6760",
          gray: {
            medium: "#d4d3d1",
            light: "#e9e8e4",
          },
          yellow: {
            DEFAULT: "#EFC700",
            light: "#f9e89a",
          },
          creme: "#fff2df",
          offwhite: "#f3f3f3",
        },
      },
      animation: {
        ticker: "ticker 30s linear infinite",
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Poppins", "sans-serif"],
        body: ["var(--font-body)", "Work Sans", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1100px",
          xl: "1440px",
          "2xl": "1920px",
        },
      },
    },
  },
  plugins: [],
};
export default config;
