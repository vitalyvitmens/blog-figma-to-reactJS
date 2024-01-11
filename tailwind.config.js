module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          400: "#afafaf",
          500: "#acacac",
          600: "#808080",
          700: "#616161",
          900: "#1c1c1c",
          "900_01": "#151515",
        },
        black: { 900: "#000000" },
        blue_gray: { 400: "#8c8c8c", 700: "#405060" },
        red: { A100: "#f88a89" },
        white: { A700: "#ffffff" },
      },
      fontFamily: {
        commissioner: "Commissioner",
        arial: "Arial",
        inter: "Inter",
      },
      boxShadow: {
        bs: "0px -7px  35px 9px #616161",
        bs1: "0px 9px  35px 9px #616161",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
