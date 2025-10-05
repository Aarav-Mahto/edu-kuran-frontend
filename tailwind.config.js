/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./Main.{js,ts,tsx,jsx}, ./src/App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {},
  },
  plugins: [],
};
