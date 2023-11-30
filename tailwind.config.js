/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "index.php",
    "src/input.css",
    "js/scripts.js",
    "view/*.html",
    "cgu.php",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#1C5FC5",
        red: "#E7101D",
        green: "#0D9D57",
        pink: "#F39ED6",
        yellow: "#F2C107",
        orange: "#E96404",
        grey: "#EBE5DE",
        bluevideo: "#1c60c5",
        button: "#F39ED6",
      },
      fontWeight: {
        extrabold: 800,
        black: 900,
        introbold: 1000,
      },
      fontSize: {
        title: "2rem",
        content: "1rem",
        bigtitle: "3rem",
        intro: "4.5rem",
        us: "6rem",
      },
      fontFamily: {
        secondary: ["Roboto", "sans-serif"],
        primary: ["Raleway", "serif"],
      },
      gridTemplateColumns: {
        14: "repeat(14, minmax(0, 1fr))",
      },
      keyframes: {
        banner: {
          "0%": { transform: "translateX(-200%)" },
          "100%": { transform: "translateX(0)" },
        },
        "color-banner": {
          "0%": { "background-color": "#F2C107" },
          "16%": { "background-color": "#E7101D" },
          "32%": { "background-color": "#F39ED6" },
          "49%": { "background-color": "#1C5FC5" },
          "66%": { "background-color": "#0D9D57" },
          "83%": { "background-color": "#E96404" },
          "100%": { "background-color": "#F2C107" },
        },
      },
      animation: {
        banner: "banner 10s forwards linear infinite",
        "color-banner": "color-banner 20s linear infinite",
      },
      translate: {
        "banner-right": "-200%",
        "banner-left": "0",
      },
    },
  },
  // plugins: [
  //   function ({ addUtilities, theme, variants }) {
  //     const keyframes = {
  //       "@keyframes scroll": {
  //         from: { transform: "translateX(100%)" },
  //         to: { transform: "translateX(-100%)" },
  //       },
  //     };

  //     addUtilities(keyframes, ["responsive", "hover"]);
  //   },
  // ],
};
