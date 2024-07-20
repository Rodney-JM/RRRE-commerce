/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, js}"],
  theme: {
    extend: {
      fontFamily:{
        "montserrat":["Montserrat", "sans-serif"],
        "palanquin":["Palanquin", "sans-serif"]
      },
      colors:{
        "redS": "#BD2A2E",
        "blackS": "#3B3936",
        "white1": "#B2BEBF",
        "white2": "#889C9B",
        "white3": "#486966"
      }
    },
  },
  plugins: [],
}