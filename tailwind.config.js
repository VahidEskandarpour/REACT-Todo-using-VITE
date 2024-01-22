/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        neomorphism: "#e0e0e0",
      },
      boxShadow: {
        neomorphism: "20px 20px 60px #bebebe,-20px -20px 60px #ffffff",
      },
      gradientColorStops: {
        "my-gradientFROM": " hsla(133, 88%, 35%, 1) 0%",
        "my-gradientTO": "hsla(0, 0%, 100%, 1) 100%)",
      },
      fontFamily: {
        RubikDoodleShadow: ["Rubik Doodle Shadow"],
        Merriweather: ["Merriweather"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "scale(0)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
        shake: {
          "0%": {
            transform: "rotateZ(20deg)",
            "transform-origin": "bottom center",
          },
          "50%": {
            transform: "rotateZ(-20deg)",
            "transform-origin": "bottom center",
          },
          "100%": {
            transform: "rotateZ(20deg)",
            "transform-origin": "bottom center",
          },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in",
        shake: "shake 0.5s infinite",
      },
    },
  },
  plugins: [],
};
