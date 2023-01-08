/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#FFFFFF",
        body: "#F5F5F5",
        dark: "#101820",
        grey: "#40464D",
        "dark-blue": "#1F2F3F",
      },
      fontFamily: {
        primary: ["Gerbera", "sans-serif"],
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
        "out-quad": "cubic-bezier(0.5, 1, 0.89, 1)",
        "in-quad": "cubic-bezier(0.11, 0, 0.5, 0)",
      },
    },
  },
  plugins: [],
};
