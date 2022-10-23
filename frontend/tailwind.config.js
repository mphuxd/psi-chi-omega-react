module.exports = {
  mode: "jit",
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      max: "1664px",
    },
    fontFamily: {
      display: ["cinzel"],
      body: ["inter"],
      mono: ["IBMPlexMono"],
    },
    fontSize: {
      xs: ".625rem", //10px
      sm: ".75rem", //12px
      tiny: ".875rem", //14px
      base: "1rem", //16px
      lg: "1.125rem", //18px
      xl: "1.25rem", //20px
      "2xl": "1.5rem", //24px
      "3xl": "1.75rem", //28px
      "4xl": "2rem", //32px
      "5xl": "2.25rem", //36px
      "6xl": "2.625rem", //42px
      "7xl": "3rem", //48px
      "8xl": "3.375rem", //54px
      "9xl": "3.75rem", //60px
      "10xl": "4.25rem", //68px
      "11xl": "4.75rem", //76px
      "12xl": "5.25rem", //84px
      "13xl": "5.75rem", //92px
    },
    extend: {
      colors: {
        forest: "#0D5736",
        darkforest: "#004225",
        psichigreen: "#006341",
        midnight: "#212121",
        white: "#FFFFFF",
        smoke: "#F5F5F5",
        mist: "#F2F2F2",
        silver: "#949494",
        gray: "#6A6A6A",
        nickel: "#656F77",
        arsenic: "#394149",
        poseidon: "#212B4B",
      },
    },
  },
  plugins: [],
};
