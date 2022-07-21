/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        tgreen: "0px 3px 10px rgba(163,200,208,1)",
        xxxl: '0px 3px 16px 5px rgba(125,125,125,0.6)',
        stylish: '0px 5px 20px 1px rgba(0,0,0,0.4)',
        form: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
        btn: 'rgba(0, 0, 0, 0.2) 0px 60px 40px -7px',
        float: '0 8px 55px 0 rgb(0 0 0 / 16%)'
      },
      colors: {
        darkgray: "#383838",
        trendygreen: "#14B1C0",
        darkertrendygreen: "#0E6378",
        lighterdarktrendygreen: "#106e86",
        simplegreen: "#18C5BB",
        lightorange: "#FF6F91",
        verylighttrendygreen: "#E4FEFF",
        orange:'#F9BF87',
        pinky: '#F7B1A2',
      }
    },
  },
  plugins: [],
}
