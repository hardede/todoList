/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      lg: { max: "910px" },

      md: { max: "700px" },

      sm: { max: "501px" },

      xs: { max: "400px" },
    },
    extend: {
      textColor: {
        skin: {
          btn: "var(--button-text-color)",
          input: "var(--input-text-color)",
          placeholder: "var(--input-placeholder-text-color)",
          icon: "var(--icon-color)",
          counterBtn: "var(--counter-button)",
          tabsBtn: "var(--tabs-button)",
          tabsActive: "var(--tabsActive-button)",
          headerLinks: "var(--header-links)",
          itemTitle: "var(--item-title)",
        },
      },
      borderColor: {
        skin: {
          btn: "var(--button-border-color)",
          input: "var(--input-background-color)",
        },
      },
      backgroundColor: {
        skin: {
          base: "var(--background-color)",
          btn: "var(--button-background-color)",
          input: "var(--input-background-color)",
        },
      },
      boxShadowColor: {
        skin: {
          shadowCol: "var(--shadow-input)",
        },
      },
    },
  },
  plugins: [],
};
