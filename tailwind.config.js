/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aukai: {
          blue: {
            green: {
              DEFAULT: "#00b8ac",
            },
          },
        },
      },
    },
  },
  plugins: [],
};
