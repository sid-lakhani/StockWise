const tailwindcssAnimate = require("tailwindcss-animate");

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: {
      primary: "var(--font-inter)",
      secondary: "var(--font-poppins)",
    },
    extend: {
      colors: {
        accent: "#140f8e",
        bg: {
          dark: "#0a0a0a",
          light: "#ffffff",
        },
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
