/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cascadia: ["Cascadia Code", "sans-serif"],
        grotesk: ["Space Grotesk", "sans-serif"],
      },
      boxShadow: {
        shadowButton:
          "rgb(247, 104, 21) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset",
      },
      backgroundImage: {
        "pattern-3": `repeating-linear-gradient(90deg, #313131 0, #313131 3%, transparent 0, transparent 50%), 
                      repeating-linear-gradient(180deg, #313131 0, #313131 3%, transparent 0, transparent 50%)`,
      },
      backgroundSize: {
        size: "60px 60px",
      },
      backgroundColor: {
        custom: "#1b1c1e",
      },
      opacity: {
        100: "1",
      },
    },
  },
  plugins: [],
};
