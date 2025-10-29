/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "grayColor" : "#F5F5F5",
        "mainColor" : "#DB4444"
      }
    },
  },
  plugins: [],
}

