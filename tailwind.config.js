const { DM_Sans } = require('next/font/google');
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 4s linear infinite',
      },
      screens: {
        xs: "320px",
      },
      fontFamily: {
        Manrope: ['"Manrope"', "sans-serif"],
        Poppins: 'var(--font-poppins)',
        Roboto: 'var(--font-roboto)',
        Outfit: 'var(--font-outfit)',
        Heebo: 'var(--font-heebo)',
        DM_Sans: ['DM Sans', 'sans-serif'], 
      },
      animation: {
        graph: "graph 130s linear infinite",
        scrollX: "scrollX 15s linear infinite",
        slideDown: "slideDown 0.8s ease-out forwards", // ✅ added
        slideUp: "slideUp 0.8s ease-out forwards",     // ✅ added
      },
      keyframes: {
        graph: {
          "0%": {
            "background-position": "-2765px 100%, 0 0",
          },
          "100%": {
            "background-position": "0 100%, 0 0",
          },
        },
        scrollX: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        slideDown: {
          "0%": {
            transform: "translateY(-20px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        slideUp: {
          "0%": {
            transform: "translateY(20px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
      },
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      dropShadow: {
        custom: "3px 3px 2px #000",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
