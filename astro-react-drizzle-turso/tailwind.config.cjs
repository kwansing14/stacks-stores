/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addComponents, theme }) {
      addComponents({
        body: {
          backgroundColor: theme('colors.neutral.900'),
          color: theme('colors.neutral.100'),
          fontSize: theme('fontSize.sm'),
        },
        input: {
          backgroundColor: theme('colors.neutral.800'),
          outline: 'none',
        },
      });
    },
  ],
};
