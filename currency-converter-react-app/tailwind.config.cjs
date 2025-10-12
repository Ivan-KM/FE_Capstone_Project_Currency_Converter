module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // You can set it to 'media' or 'class' if needed
    theme: {
    extend: {},
    },
    plugins: [],
};
// Text color: text-blue-600
export default {
  theme: {
    extend: {
      colors: {
        brandBlue: "rgb(31, 35, 95)",
      },
    },
  },
};
