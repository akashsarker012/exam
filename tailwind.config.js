/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#43E7DF',
        'secondary': '#3639A4',
        'tertiary': '#0000FF',
      },
    },
  },
  plugins: [],
}