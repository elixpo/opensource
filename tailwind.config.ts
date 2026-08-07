import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#111111',
        canvas: '#ffffff',
        cream: '#f9f5f0',
        accent: {
          DEFAULT: '#e53935',
          deep: '#c62828',
          soft: '#fff0ee',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,.06), 0 14px 40px rgba(0,0,0,.07)',
      },
    },
  },
  plugins: [],
};

export default config;
