const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        thiely: ['thiely', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'xbg': "url('~/assets/images/Xbg.svg')",
      },
      backgroundPosition: {
        'offset': '20%',
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};
