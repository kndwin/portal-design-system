module.exports = {
  theme: {
    colors: {
      primary: "#000000",
      secondary: "#444444",
      tertiary: "#767676",
      placeholder: "#bbbbbb",
      "dotted-line": "#dddddd",
      line: "#eeeeee",
      "primary-brand": "#1565fa",
      success: "#206b5f",
      error: "#db0012",
      warning: "#e36710",
      "subtle-warning": "#f4bf00",
      "disabled-filled": "#f4f4f4",
      white: "#ffffff",
    },
  },
  content: [
    `src/**/*.{js,ts,jsx,tsx}`,
    `pages/**/*.{js,ts,jsx,tsx}`,
    `components/**/*.{js,ts,jsx,tsx}`,
    "../../packages/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [],
};
