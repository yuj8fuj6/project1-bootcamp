/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      display: ["nunito"],
      body: ["nunito"],
    },
    extend: {
      fontSize: {
        14: "14px",
        xxl: "10rem",
      },
      backgroundColor: {
        "main-bg": "#FAE8E0",
        "secondary-white-bg": "#FAFBFB",
        "light-gray": "#F7F7F7",
        "half-transparent": "rgba(0, 0, 0, 0.5)",
      },
      borderWidth: {
        1: "1px",
      },
      borderColor: {
        color: "rgba(0, 0, 0, 0.1)",
      },
      width: {
        400: "400px",
        760: "760px",
        780: "780px",
        800: "800px",
        1000: "1000px",
        1200: "1200px",
        1400: "1400px",
      },
      height: {
        80: "80px",
      },
      minHeight: {
        590: "590px",
      },
      colors: {
        "dark-pink": "#EF7C8E",
      },
    },
  },
  plugins: [],
};
