/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, js}", "index.html", "register.html"],
  theme: {
    extend: {
      fontFamily:{
        "montserrat":["Montserrat", "sans-serif"],
        "palanquin":["Palanquin", "sans-serif"]
      },
      colors:{
        "blackS": "#3B3936",
        "white1": "#F2F2F2",
        "white2": "#d0d0d0",
        "white3": "#486966",
        "white4": "#7c7989",
        "Esc": "#4951F2",
        "Esc2": "#5C73F2",
        "Norm": "#BF045B",
        "Clar": "#7E8FF2",
        "Clar2": "#BBC3F2",
        "registerBg": "#2f2f35",
        "registerInputElements":"#4D5159"
      }
    },
  },
  plugins: [],
}