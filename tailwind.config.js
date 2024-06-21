/** @type {import('tailwindcss').Config} */
let plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // animation: {
      //   marquee: "marquee 1s ease-in-out infinite",
      // },
      // keyframes: {
      //   marquee: {
      //     "0%": { transform: "translateX(100%)" },
      //     "100%": { transform: "translateX(-100%)" },
      //   },
      // },
    },
    backgroundImage: {
      gradient: "linear-gradient(90deg, #E6793B 1.54%, #FF4185 97.86%)",
    },
    colors: {
      transparent: "transparent",
      primary: "#DA7D4A",
      secondary: "#334155",
      textPrimary: "#334155",
      textSecondary: "#94a3b8",
      bgPrimary: "#fdfcfb",
      bgSecondary: "#f7ece1",
      rose: "#f43f5e",
      white: "#fff",
      // $disabledColor: #e2e8f0;
      // $inputBgColor: #f1f5f9;
    },
    screens: {
      mobile: { max: "576px" },
      table: { max: "1400px" },
    },
    fontSize: {
      "14s": ["0.875rem", { lineHeight: "1.3125rem" }],
      "16s": ["1rem", { lineHeight: "1.5rem" }],
      "18s": ["1.125rem", { lineHeight: "1.6875rem" }],
      "20s": ["1.25rem", { lineHeight: "1.875rem" }],
      "24s": ["1.5rem", { lineHeight: "2.25rem" }],
      "28s": ["1.75rem", { lineHeight: "2.625rem" }],
      "32s": ["2rem", { lineHeight: "3rem" }],
      "40s": ["2.5rem", { lineHeight: "3.75rem" }],
      "52s": ["3.25rem", { lineHeight: "4.875rem" }],
      // sm: ["0.875rem", { lineHeight: "2rem" }],
      // base: ["1rem", { lineHeight: "2rem" }],
      // lg: ["1.125rem", { lineHeight: "2rem" }],
      // xl: ["1.25rem", { lineHeight: "2rem" }],
      // "2xl": ["1.5rem", { lineHeight: "2rem" }],
      // "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
    },
  },
  plugins: [
    plugin(function ({ matchVariant, theme }) {
      matchVariant(
        "nth",
        value => {
          return `&:nth-child(${value})`;
        },
        {
          values: {
            DEFAULT: "n", // Default value for `nth:`
            "2n": "2n", // `nth-2n:utility` will generate `:nth-child(2n)` CSS selector
            "3n": "3n",
            "4n": "4n",
            "5n": "5n",
          },
        }
      );
    }),
  ],
};
