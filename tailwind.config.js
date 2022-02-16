module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minWidth: {
      1: "1rem",
      1.5: "1.5rem",
      2: "2rem",
      2.5: "2.5rem",
      3: "3rem",
    },
    minHeight: {
      1: "1rem",
      1.5: "1.5rem",
      2: "2rem",
      2.5: "2.5rem",
      3: "3rem",
    },
    boxShadow: {
      "radio-checked": `
      0 0 0 4px rgba(59, 130, 246, 1) inset,0 0 0 12px rgba(59, 130, 246, 0.5) inset
      `,
    },
    extend: {
      animation: {
        "bt-pop": "pop 0.25s ease-out",
        "radio-checked": "radiomark 0.2s ease-in-out",
      },
      keyframes: {
        pop: {
          "0%": { transform: "scale(0.95)" },
          "40%": { transform: "scale(1.02)" },
          "100%": { transform: "scale(1)" },
        },
        radiomark: {
          "0%": { boxShadow: "0 0 0 12px #F2CD8C inset" },
          "50%": { boxShadow: "0 0 0 3px #F2CD8C inset" },
          "100%": { boxShadow: "0 0 0 4px #F2CD8C inset" },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
