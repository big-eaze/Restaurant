/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ["Cormorant Garamond", "serif"],
        roboto: ["Roboto", "sans-serif"],
        lobster: ["Lobster", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"],
        dancing: ["Dancing Script", "sans-serif"],
        belleza: ["belleza", "sans-serif"]
      },
    },
  },
  plugins: [],
}
