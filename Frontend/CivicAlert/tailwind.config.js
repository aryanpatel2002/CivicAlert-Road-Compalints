/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './src/**/*.{html,js,jsx,ts,tsx}', // Adjust paths and extensions as per your project structure
    './public/index.html'],
  theme: {
    extend: {}
  },
  plugins: [require('daisyui')]
};