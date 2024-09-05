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
        primary: "#FFFFFF",
        secondary: "050816F",
        tertiary: "#151030",
        "black-100": "#FFFFFF",
        "black-200": "#FFFFFF",
        "white-100": "#FFFFFF",
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