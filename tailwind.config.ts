import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#f9f5f0', // Warm off-white text
        'ink-faint': '#888888',
        canvas: '#0a0a0a', // Dark background
        panel: '#151515', // Slightly lighter for cards
        line: '#2a2a2a', // Borders
        accent: {
          DEFAULT: '#e53935',
          deep: '#c62828',
          soft: 'rgba(229, 57, 53, 0.15)',
        },
        gold: '#fbbf24',
        amber: '#f59e0b',
        teal: '#14b8a6',
        green: '#10b981',
        red: '#ef4444',
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
