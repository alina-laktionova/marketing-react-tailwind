/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#112B3C",
        secondary: "#F66B0E",
      },
      backgroundImage: {
        "orange-gradient": "linear-gradient(315deg, #ff4e00, #ec9f05 74%)",
      },
    },
  },
  plugins: [],
};
