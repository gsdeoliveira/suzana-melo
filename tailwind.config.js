/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#ADBC6C",
          200: "#9EAF54",
          300: "#97AA44",
          400: "#778929",
          500: "#6C7E1B",
        },
      },
    },
  },
  plugins: [],
}
