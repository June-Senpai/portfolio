/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        myShadow1: "4.1px -5px 0 0 rgb(0, 0, 0)",
        myShadow2: "-4.1px -5px 0 0 rgb(0, 0, 0)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        circularLight:
          "repeating-radial-gradient(black 2px, white 5px, white 100px)",
      },
      height: {
        128: "32rem",
        144: "36rem",
        160: "40rem",
        176: "46rem",
        192: "53rem",
      },
      width: {
        128: "32rem",
        144: "36rem",
        160: "40rem",
        176: "46rem",
        192: "53rem",
      },
    },
  },
  plugins: [],
};
