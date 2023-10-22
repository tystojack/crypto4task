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
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1", visibility: "visible" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0", visibility: "invisible" },
        },
      },
    },
    animation: {
      fadeIn: "fadeIn 400ms ease-in-out forwards",
      fadeOut: "fadeOut 400ms ease-in-out forwards",
    },
  },
  plugins: [],
}
