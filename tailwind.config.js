/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        surface: {
          DEFAULT: "#f7f7f7",
          border: "#e5e5e5",
          hover: "#f0f0f0",
          glass: "rgba(255, 255, 255, 0.85)",
        },
        accent: {
          red: "#E50914",
          "red-dark": "#B00000",
          "red-glow": "rgba(229, 9, 20, 0.35)",
          "red-dim": "rgba(229, 9, 20, 0.12)",
        },
        dark: {
          900: "#050608",
          800: "#080808",
          700: "#141414",
          600: "#222222",
          500: "#444444",
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
        display: ["var(--font-display)", "Manrope", "Inter", "sans-serif"],
      },
      animation: {
        marquee: "marquee 35s linear infinite",
        "marquee-reverse": "marquee-reverse 35s linear infinite",
        pulse: "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
};
