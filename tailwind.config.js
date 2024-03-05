/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/parts/*.jsx", "./src/components/*.jsx"],
  theme: {
    extend: {},
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1025px" },
      // => @media (max-width: 1025px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "400px" },
      // => @media (max-width: 400px) { ... }

      xs: { max: "300px" },
      // => @media (max-width: 300px) { ... }
    },
  },
  plugins: [],
};
