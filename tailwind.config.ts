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
    keyframes: {
		marquee: {
			from: {
				transform: 'translateX(0)'
			},
			to: {
				transform: 'translateX(calc(-100% - var(--gap)))'
			}
		},
		'marquee-vertical': {
			from: {
				transform: 'translateY(0)'
			},
			to: {
				transform: 'translateY(calc(-100% - var(--gap)))'
			}
		}
	},
	animation: {
		marquee: 'marquee var(--duration) infinite linear',
		'marquee-vertical': 'marquee-vertical var(--duration) linear infinite'
	}
}
  },
  plugins: [tailwindcssAnimate],
};
