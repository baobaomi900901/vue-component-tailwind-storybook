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
      backgroundImage: {
        checkedmask: `
          linear-gradient(-45deg, transparent 65%, var(--chkbg) 0), 
          linear-gradient(45deg, transparent 75%, var(--chkbg) 0), 
          linear-gradient(-45deg, var(--chkbg) 40%, transparent 0), 
          linear-gradient(45deg, var(--chkbg) 30%, var(--chkfg) 0, var(--chkfg) 40%, transparent 0), 
          linear-gradient(-45deg, var(--chkfg) 50%, var(--chkbg) 0)
          `,
      },
      colors: {
        gold: {
          50: "#fefdf9",
          100: "#fefaf4",
          200: "#fcf3e2",
          300: "#faebd1",
          400: "#f6dcaf",
          500: "#F2CD8C",
          600: "#dab97e",
          700: "#b69a69",
          800: "#917b54",
          900: "#776445",
        },
        mygray: {
          1: "#F6F6F6",
        },
      },
      spacing: {
        px: "1px",
        30: "7.5rem",
        50: "12.5rem",
        70: "17.5rem",
        80: "20rem",
        100: "25rem",
        pager: "78rem",
      },
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
    extend: {
      extend: {
        backgroundColor: ["checked"],
        backgroundImage: ["checked"],
        borderColor: ["checked"],
        animation: ["checked"],
      },
    },
  },
  plugins: [],
};
