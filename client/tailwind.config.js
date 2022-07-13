/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        tgreen: "0px 3px 10px rgba(163,200,208,1)",
      },
      colors: {
        darkgray: "#383838",
        trendygreen: "#A3C8D0",
        darkertrendygreen: "#5E757B"
      }
    },
  },
  plugins: [],
}
