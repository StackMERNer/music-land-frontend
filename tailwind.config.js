/** @type {import('tailwindcss').Config} */
// const withMT = require("@material-tailwind/react/utils/withMT");
import withMT from "@material-tailwind/react/utils/withMT";
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      dark: {
        light: "#5A7184",
        solid: "#070E21",
        soft: "#183B56",
      },
      primary:{
        yellow:"#FFF500"
      }
    },
    fontFamily: {
      stylish: ["Lobster", "sans-serif"],
      roboto:["Roboto", "sans-serif"]
    },
  },
  plugins: [],
});
