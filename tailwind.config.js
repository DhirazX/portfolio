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
      mono: ["IBM Plex Mono", "monospace"],
    },
    extend: {
      colors: {
        ink: "#161616", // primary text
        muted: "#6b6b6b", // comments / secondary text
        rule: "#d8d8d8", // hairline borders
        accent: "#3a6ea5", // the one accent color, used sparingly
        surface: "#151515", // dark window chrome
        line: "rgba(255, 255, 255, 0.162)",
      },
      transitionTimingFunction: {
        DEFAULT: "ease",
      },
    },
  },
  plugins: [],
};
