const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}", "./public/index.html"],
  theme: {
    // desktop-first, mirrors the max-width breakpoints the site was designed with
    screens: {
      max1100: { max: "1100px" },
      max900: { max: "900px" },
      max600: { max: "600px" },
      max500: { max: "500px" },
    },
    fontFamily: {
      ...defaultTheme.fontFamily,
      oswald: ["Oswald", "sans-serif"],
      mono: ["IBM Plex Mono", "monospace"],
    },
    extend: {
      colors: {
        surface: "#151515",
        line: "rgba(255, 255, 255, 0.162)",
      },
      backgroundImage: {
        grid: "linear-gradient(to right, rgb(203 213 225 / 0.6) 1px, transparent 1px), linear-gradient(to bottom, rgb(203 213 225 / 0.6) 1px, transparent 1px)",
        "grid-sm":
          "linear-gradient(to right, rgb(203 213 225 / 0.5) 1px, transparent 1px), linear-gradient(to bottom, rgb(203 213 225 / 0.5) 1px, transparent 1px)",
      },
      transitionTimingFunction: {
        DEFAULT: "ease",
      },
    },
  },
  plugins: [],
};
