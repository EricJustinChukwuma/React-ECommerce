/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      primary: "Orbitron",
      secondary: "Rajdhani",
      tertiary: "Helvetica",
      nunito: "nunito"
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
      xxl: "1440px"
    },
    extend: {
      colors: {
        primary: "#0a0a0a",
        accent: "#b809c3",
        lucy: "#ff2625",
        red: "#df0404c0",
        gray: { 100: "#808080", 200: "#323232", 300: "#212121"},
        green: "#25da72",
        cyan: "#14ffec"
      },
    },
  },
  plugins: [],
}

