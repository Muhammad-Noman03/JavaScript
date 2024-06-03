/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      boxShadow: {
        'box': 'transparent 10px 10px 0px -3px, rgb(31, 193, 27) 10px 10px',
      }
    },
  },
  plugins: [],
}

