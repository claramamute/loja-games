/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins : ['Poppins', 'sans-serif']
      }
    },

    colors: {
      'green-neon': '#baf038',
      'blue-neon': '#00d7df',
      'purple': '#5d41b8',
      'red-clean': '#f14c59',
      'yellow': '#FDD844',
      'black': '#000',
      'white': '#fff',
      'red': '#f14c59'
    }
  },
  plugins: [],
}