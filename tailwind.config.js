/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        mini: "0.55rem",
        xs: "0.85rem",
        sm: "0.9rem",
        base: "1.5rem",
        xl: "2rem",
        lg: "1rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
      },
      width: {
        "card-row": "100%",
        "card-column": "100%/4",
      },
      colors: {
        primary: "#000000",
        secondary: "rgba(0,0,0,0.6)",
        btn_primary: "rgb(65,150,255)",
        btn_secondary: "#your_secondary_color",
        btn_disabled: "rgb(206,206,206)",
      },
      screens: {
        laptop: "1024px",
      },
      gridTemplateColumns: {
        autofill: "repeat(auto-fill, 180px)",
      },
    },
  },
  plugins: [],
};
