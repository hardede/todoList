/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      lg: { max: "910px" },

      md: { max: "700px" },

      sm: { max: "501px" },

      xs: { max: "400px" },
      
      xss: { max: "351px" },
    },
    extend: {},
  },
  plugins: [],
};
