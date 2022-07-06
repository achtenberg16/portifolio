/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.tsx",
    ],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["Poppins", "sans-serif"]
      },
      colors: {
        "emerald": "#34D399",
        "lightBlue": "#38BDF8",
        "yellow": "#F59E0B",
        "yellow-500": "#FDE68A",
        "rose": "#F43F5E",
        "gray-900": "#111827",
        "gray-bg": "#E1E1E6",
        "gray-text": "#C4C4CC",
        "gray-textA": "#8D8D99",
        "blue-text": "#40C4FF",
        "blue-600": "#00618A",
        "white-200": "#EFFFFA",
        "green-500": "#22C55E",
        "green-300": "#84CC16",
        "purple": "#A855F7"
      },
      screens: {
        "lg": "1115px"
      }
    },
  },
  plugins: [],
}
