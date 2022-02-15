module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minWidth: {
      2: "2rem",
    },
    minHeight: {
      2: "2rem",
    },
    extend: {
      animation: {
        "bt-pop": "pop 0.25s ease-out",
      },
      keyframes: {
        pop: {
          "0%": { transform: "scale(0.95)" },
          "40%": { transform: "scale(1.02)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
