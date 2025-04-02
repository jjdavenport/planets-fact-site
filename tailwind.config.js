/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        white: "hsl(0, 0%, 100%)", // Pure white
        black: "hsl(240, 67%, 8%)", // Dark navy-like black
        darkGrey: "hsl(240, 17%, 26%)", // Muted dark grey
        lightGrey: "hsl(240, 7%, 54%)", // Soft light grey

        mercury: "hsl(196, 48%, 49%)", // Cyan-blue
        venus: "hsl(30, 85%, 61%)", // Warm orange
        earth: "hsl(261, 65%, 51%)", // Vibrant purple
        mars: "hsl(8, 64%, 51%)", // Reddish-orange

        jupiter: "hsl(2, 73%, 53%)", // Bright red
        saturn: "hsl(18, 73%, 46%)", // Deep orange
        uranus: "hsl(170, 73%, 44%)", // Aqua green
        neptune: "hsl(226, 81%, 56%)", // Rich blue
      },
      fontFamily: {
        spartan: ["spartan", "sans-serif"],
        antonio: ["antonio", "sans-serif"],
      },
      backgroundImage: {
        stars: "url('/src/assets/background-stars.svg')",
      },
    },
  },
  plugins: [],
};
