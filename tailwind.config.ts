import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: '#FFF8EB',
        card: '#FFF0D2',
        primary: '#FF5D68',
        teal: '#00B4A5',
        gold: '#FFBE1E',
        orange: '#FF8C1E',
        purple: '#B450DC',
        green: '#3CC864',
        'text-bright': '#262630',
        muted: '#A07864',
        'status-bg': '#FF5D68',
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
