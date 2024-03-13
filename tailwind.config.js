/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      maxWidth: {
        '1200': '1200px'
      },
      minWidth: {
        '1200': '1200px'
      }
    },
  },
  plugins: [],
}

