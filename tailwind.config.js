/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary-light":"#f8f8f8",
        "primary-dark": "#191919",
        pinkish: {
          100: "#edb5f5",
          200: "#eb7ad4",
          300: "#e86ed0"
        },
        blueish: {
          100:"e6f8f9",
          200:"b1e8ed",
        }
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography")
  ],
}

