/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        "white": "hsl(0, 0%, 100%)",
        "light-pink": "hsl(275, 100%, 97%)",
        "grayish-purple": "hsl(292, 16%, 49%)",
        "dark-purple": "hsl(292, 42%, 14%)",
        "purple": "rgb(173,40,235)",
      },

      fontFamily: {
        "Work-Sans": ["Work Sans", "sans-serif"],
      },

      screens: {
        'custom-sm': '520px',
      },
    },
  },
  plugins: [],
};
