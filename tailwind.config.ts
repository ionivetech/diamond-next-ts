import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './node_modules/primereact/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      boxShadow: {
        sidebar: '0px 6px 30px #f1f3ff',
      },
    },
  },
  plugins: [],
}
export default config
