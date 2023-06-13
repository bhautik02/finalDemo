/** @type {import('tailwindcss').Config} */
// @import url('https://fonts.cdnfonts.com/css/c-cereal');
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {},
    extend: {
      colors: {
        primary: "#F5385D",
      },
    },
    screens: {
      // sm: "500px",
      // // => @media (min-width: 576px) { ... }
      // md: "1000px",
      // // => @media (min-width: 960px) { ... }
      // lg: "1440px",
      // // => @media (min-width: 1440px) { ... }'sm': '640px',
      // => @media (min-width: 640px) { ... }

      xsm: "575px",
      // => @media (min-width: 640px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
