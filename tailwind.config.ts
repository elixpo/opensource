import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: 'var(--ink)',
        'ink-soft': 'var(--ink-soft)',
        'ink-faint': 'var(--ink-faint)',
        canvas: 'var(--canvas)',
        cream: 'var(--cream)',
        line: 'var(--line)',
        accent: {
          DEFAULT: 'var(--accent)',
          deep: 'var(--accent-deep)',
          soft: 'var(--accent-soft)',
        },
        bg: 'var(--bg)',
        card: 'var(--card)',
        primary: 'var(--primary)',
        teal: 'var(--teal)',
        gold: 'var(--gold)',
        orange: 'var(--orange)',
        purple: 'var(--purple)',
        green: 'var(--green)',
        'text-bright': 'var(--text-bright)',
        muted: 'var(--muted)',
        'status-bg': 'var(--status-bg)',
      },
      fontFamily: {
        sans: [
          'var(--font-geist-sans)',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif',
        ],
        mono: [
          'var(--font-geist-mono)',
          'ui-monospace',
          'SFMono-Regular',
          'monospace',
        ],
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,.06), 0 14px 40px rgba(0,0,0,.07)',
      },
    },
  },
  plugins: [],
};

export default config;
