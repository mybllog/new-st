/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 21s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": {
            transform: "translateX(100%)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
      },
      fontFamily: {
  			poppins: ["var(--font-poppins)", "sans-serif"],
  			inter: ["var(--font-inter)", "sans-serif"],
  			geistSans: ["GeistVF", "sans-serif"],
  			geistMono: ["GeistMonoVF", "monospace"],
  			Plus: ["Plus Jakarta Sans"],
        Fira:["Fira Sans Condensed"]
  		},
    },
  },
  plugins: [],
}

