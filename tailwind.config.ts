import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-outfit)', 'Inter', 'sans-serif'],
        display: ['var(--font-syne)', 'sans-serif'],
        mono: ['var(--font-ibm-plex-mono)', 'Courier New', 'monospace'],
      },
      colors: {
        bg: '#020617',
        'bg-2': '#0f172a',
        surface: {
          DEFAULT: '#1e293b',
          2: '#334155',
          3: '#475569',
        },
        accent: {
          gold: {
            bright: '#fde047',
            DEFAULT: '#eab308',
            dim: '#a16207',
            muted: '#422006',
          },
          indigo: {
            bright: '#818cf8',
            DEFAULT: '#6366f1',
            dim: '#4338ca',
          },
        },
        text: {
          primary: '#f8fafc',
          secondary: '#cbd5e1',
          muted: '#94a3b8',
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.05)',
          strong: 'rgba(255, 255, 255, 0.1)',
        }
      },
      maxWidth: {
        site: '1140px',
      },
      borderRadius: {
        sm: '4px',
        DEFAULT: '4px',
        lg: '12px',
        xl: '20px',
      },
      animation: {
        fadeup: 'fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) both',
        float: 'float 9s ease-in-out infinite',
        blink: 'blink 1.1s step-end infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(22px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}

export default config
