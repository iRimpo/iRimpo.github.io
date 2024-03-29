/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      cursor: {
        default: 'url(src\assets\cursor.png), default',
        pointer: 'url(src\assets\cursor.png), pointer',
      },
      colors: {
        primary: "#000000",
        secondary: "050816F",
        tertiary: "#151030",
        "black-100": "#000000",
        "black-200": "#000000",
        "white-100": "#f3f3f3",
        yellow: "FCE44D"
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};