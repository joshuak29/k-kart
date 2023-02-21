/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./public/index.html", "./src/**/*.{vue, js, ts, jsx, tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#D5D2CI",
          medium: "#BD8E62",
          dark: "#A46843",
          darker: "#370D00",
        },
      },
    },
    screens: {
      xs: "430px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
