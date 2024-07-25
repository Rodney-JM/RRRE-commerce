/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, js}", "index.html"],
  theme: {
    extend: {
      fontFamily:{
        "montserrat":["Montserrat", "sans-serif"],
        "palanquin":["Palanquin", "sans-serif"]
      },
      colors:{
        "blackS": "#3B3936",
        "white1": "#B2BEBF",
        "white2": "#889C9B",
        "white3": "#486966",
        "roseEsc": "#26010B",
        "roseEsc2": "#59023B",
        "roseNorm": "#BF045B",
        "roseClar": "#F28DCF",
        "roseClar2": "#BF3F92",
        "roseClar3":"#ffafe3"
      }
    },
  },
  plugins: [],
}