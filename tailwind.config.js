/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    fontFamily: {
      sans: ["Lato", "ui-sans-serif", "system-ui"],
      montserrat: ["Montserrat", "ui-sans-serif", "system-ui"],
      "open-sans": ["Open Sans", "ui-sans-serif", "system-ui"],
    },
    extend: {
      fontFamily: {
        default: ["Lato"],
      },
    },
  },
  plugins: [],
};
