/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4B0082",
        secondary: "#1E90FF",
        accent: "#FFD700",
        dark: "#111827",
        light: "#F9FAFB"
      },
      fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Playfair Display', 'serif'],
    },

    }
  },
  plugins: []
}