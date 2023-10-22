/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {

      fontFamily: {
        Archivo: ['Archivo Black', "sans-serif"]
      },


      keyframes: {
        slideIn: {
          "0%": {  transform: "translateX(100%)" },
          "100%": {transform:  "translateX(0%)" },
          // "0%": { opacity: "0" },
          // "100%": { opacity: "1", visibility: "visible" },
        },
        slideOut: {
          // "0%": { opacity: "1" },
          // "100%": { opacity: "0", visibility: "invisible" },
          "0%": {  transform: "translateX(0%)" },
          "100%": {transform:  "translateX(100%)" },
        },
      },
    },
    animation: {
      slideIn: "slideIn 400ms ease-in-out forwards",
      slideOut: "slideOut 400ms ease-in-out forwards",
      // fadeIn: "fadeIn 400ms ease-in-out forwards",
      // fadeOut: "fadeOut 400ms ease-in-out forwards",
    },
  },
  plugins: [],
}
