module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkslategray: "#11365c",
        white: "#fff",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
    },
    fontSize: {
      base: "1rem",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};