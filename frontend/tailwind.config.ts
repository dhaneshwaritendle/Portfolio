import type { Config } from 'tailwindcss'

const config: Config = {
  // content: [
  //   './pages/**/*.{js,ts,jsx,tsx,mdx}',
  //   './components/**/*.{js,ts,jsx,tsx,mdx}',
  //   './app/**/*.{js,ts,jsx,tsx,mdx}',
  // ],

  theme: {
    extend: {
      colors: {
        bg: '#f7f3ee',
        surface: '#ede8e1',
        ink: '#2a2520',
        ink2: '#6b6460',
        accent: '#c07878',
        rose: '#e8c4c4',
        sky: '#b8d4e8',
        sage: '#b8d4c0',
        peach: '#f0d4b8',
        lavender: '#ccc4e0',
      },

      fontFamily: {
        serif: ['"DM Serif Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
    },
  },

  plugins: [],
}

export default config