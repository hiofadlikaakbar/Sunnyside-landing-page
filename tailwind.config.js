/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        sRed: "hsl(7, 99%, 70%)",
        yellow: "hsl(51, 100%, 49%)",
        dSCyan: "hsl(167, 40%, 24%)",
        dBlue: "hsl(198, 62%, 26%)",
        dMC: "hsl(168, 34%, 41%)",
        white2: "hsla(0, 0%, 100%, 0.37)",
        white3: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        barlow: ["Barlow"],
        fra: ["Fraunces"],
      },
    },
  },
  plugins: [],
};
