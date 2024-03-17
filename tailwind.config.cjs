/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "376px",
      sm: "610px",
      md: "769px",
      lg: "1024px",
      xl: "1224px",
    },
    fontFamily: {
      "zen-dots": ["Zen Dots", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#fff",
        secondary: "#0C000D",
        "second-primary": "#ED213A",
      },
      backgroundImage: {
        vision: 'url("./assets/bg_our_vision.png")',
        feature: 'url("./assets/bg_feature.png")',
        footer: 'url("./assets/footer_bg.png")',
      },
    },
  },
  plugins: [],
};
