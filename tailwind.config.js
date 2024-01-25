/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily : {
        "inter" : ['inter'],
        "Circular" : ['Circular Std']
      },
      colors : {
        "ungu" : '#5D50C6',
        "pink" : '#F85E9F',
        "oren" : '#FF5722',
        "grey" : '#191825'
      }
    },
  },
  plugins: [],
}

