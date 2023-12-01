/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#60380A",
        secondary: "#FAC06A",
        tartiary: "#994D1C",
      },
      boxShadow: {
        "3xl": "0px 10px 50px 0px rgba(0 ,0 ,0 , 0.15)",
      },
    },
  },
  plugins: [],
};
