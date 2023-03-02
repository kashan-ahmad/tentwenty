/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Graphik", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        "3xl": "1780px",
      },
    },
  },
  plugins: [],
};
