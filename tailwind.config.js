/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
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
