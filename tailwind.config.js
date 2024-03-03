module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        headline1: [
          "3.5rem",
          {
            lineHeight: "4rem",
            fontWeight: "700",
          },
        ],
        headline2: [
          "2.25rem",
          {
            lineHeight: "2.75rem",
            fontWeight: "700",
          },
        ],
        headline3: [
          "1.5rem",
          {
            lineHeight: "2rem",
            fontWeight: "700",
          },
        ],

        headline4: [
          "1.25rem",
          {
            lineHeight: "1.75rem",
            fontWeight: "700",
          },
        ],
        body1: [
          "1.125rem",
          {
            lineHeight: "1.625rem",
            fontWeight: "500",
          },
        ],
        body2: [
          "1rem",
          {
            lineHeight: "1.75rem",
            fontWeight: "500",
          },
        ],
        body3: [
          "0.875rem",
          {
            lineHeight: "1.5rem",
            fontWeight: "500",
          },
        ],
        bodyButton: [
          "1rem",
          {
            lineHeight: "1.5rem",
            fontWeight: "700",
          },
        ],
        display: [
          "5rem",
          {
            lineHeight: "6rem",
            fontWeight: "900 !important",
          },
        ],
      },
    },
  },
  plugins: [require("daisyui")],
};
