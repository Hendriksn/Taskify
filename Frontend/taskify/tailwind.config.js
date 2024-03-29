/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontSize: {
        "4x1": "2.5rem",
      },
      colors: {
        "headline-gray": "#404040",
        "radiobutton-gray": "#b6b6b6",
        "radiobutton-orange": "#FF9924",
        "navbar-blue": "#161D29",
        "navbar-oragne": "#ff6348",
      },

    },
  },
  plugins: [],
}

