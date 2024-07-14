/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        "slow-logo-spin": {
          "from": { transform: "rotate(0deg)" },
          "to": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "slow-logo-spin": "slow-logo-spin infinite 4s linear",
      },
    },
    plugins: [],
  },
};
