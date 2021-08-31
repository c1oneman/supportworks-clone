module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "regal-blue": "#095978",
        "hello-yellow": "#F8D979",
        "happy-blue": "#0BC8E2",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
