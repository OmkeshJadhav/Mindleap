/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "primary": ["Roboto", "sans-serif"],  // poppins
        "secondary": ["Open Sans", "sans-serif"]  // syne
      },
      colors: {
        "heroBg": "#0e1122",
        "para": "rgb(0 0 0 / 80%)",
        "primary": "#06a055"
      }
    },
  },
  plugins: [],
}

