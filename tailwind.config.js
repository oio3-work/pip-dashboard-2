module.exports = {
  darkMode: "class",
  content: [
    "./node_modules/preline/dist/*.js",
    "./pages/**/*.{vue,js,ts}",
    "./components/**/*.{vue,js,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("preline/plugin"), require("@tailwindcss/forms") ,  require('tailwind-scrollbar-hide')],
};
