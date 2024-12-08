/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "bannerImg": "url('/landscape.jpg')",
          "blackOverlay": "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)",
          "black-Overlay": "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)",
      },
      boxShadow: {
        'dark-md': '0 4px 6px rgba(0, 0, 0, 0.5)', // Darker medium shadow
        'dark-xl': '0 6px 9px rgba(0, 0, 0, 0.6)', // Darker large shadow
      },
    },
  },
  plugins: [],
};
