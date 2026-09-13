/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: {
          DEFAULT: "#f5b942",
          dark: "#e8a52e",
        },
        pink: {
          DEFAULT: "#f7dde1",
          light: "#fdf1f2",
        },
        ink: "#241f21",
        muted: "#6b6468",
      },
      fontFamily: {
        sans: ["Poppins", "Segoe UI", "system-ui", "sans-serif"],
      },
      borderRadius: {
        blob: "45% 55% 60% 40% / 50% 45% 55% 50%",
      },
    },
  },
  plugins: [],
};
