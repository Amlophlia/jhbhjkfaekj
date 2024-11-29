/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        scroll: "scroll 30s linear infinite",
      },
      fontFamily: {
        heading: [
          "Poppins",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        body: [
          "Figtree",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      colors: {
        black: "#000000",
        green: "#008000",
        jetBlack: "#231f20",
        "dark-green": "#008631",
        navy: "#001737",
        blue: "#2c4bff",
        gray: {
          DEFAULT: "#717375",
          light: "#dedfe0",
          medium: "#7f7f7f",
          dark: "#4f4f4f",
        },
        "cool-gray": "#f5f5f7",
        "neutral-gray": "#fafafa",
        "white-smoke": "#f4f4f4",
        white: "#ffffff",
        "dark-blue": "#0342b5",
        charcoal: "#212121",
        "blue-vivid": "#2c4bff",
        "purple-dark": "#3e1166",
        "light-pink": "#e97284",
        "lavender-light": "#f2e2ff",
        transparent: "transparent",
        "black-opacity-0": "rgba(0, 0, 0, 0)",
        "black-opacity-90": "rgba(0, 0, 0, 0.9)",
      },
    },
  },
  plugins: [],
};
