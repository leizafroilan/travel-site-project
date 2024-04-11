/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "facebook": "#316FF6",
        "instagram": "#fccc63",
        "github": "#2b3137",
        "twitter": "#1da1f2",
      },
      keyframes: {
        blink: {
          '0%': {
            opacity: '0',
          },
          '0.1%': {
            opacity: '1',
          },
          '50%': {
            opacity: '1',
          },
          '50.1%': {
            opacity: '0',
          },
          '100%': {
            opacity: '0',
          },
        },
        typewriter: {
          to: {
            left: '100%',
          },
        },

      },
      animation: {
        caret: 'typewriter 2s steps(11) forwards, blink 1s steps(11) infinite 2s',
        typewriter: 'typewriter 2s steps(11) forwards',
        
      },
    },

  },
  plugins: [
    require("tailwindcss-animate")
  ],
  
}

