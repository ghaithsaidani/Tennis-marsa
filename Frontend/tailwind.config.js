/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      Overpass: [
        "Overpass, sans-serif",
        { fontFeatureSettings: '"cv11", "ss01"' },
      ],
    },
    extend: {

      keyframes: {
        navbar:{
          '0%':{bottom:'100%'},
          '100%':{bottom:'0'}
        },
      },
      animation: {
        navbar:'navbar .6s',
      }
    },
  },
  plugins: [],
}
