import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        sans:    ['var(--font-outfit)', 'Inter', 'sans-serif'],
        display: ['var(--font-syne)', 'sans-serif'],
        mono:    ['var(--font-ibm-plex-mono)', 'Courier New', 'monospace'],
      },

      /* ─── Design tokens ─── */
      colors: {
        bg: {
          DEFAULT: '#020617',
          2:       '#0f172a',
          drawer:  '#070d1c',
        },
        surface: {
          DEFAULT: '#1e293b',
          2:       '#334155',
          3:       '#475569',
        },
        accent: {
          gold: {
            bright:  '#fde047',
            DEFAULT: '#eab308',
            dim:     '#a16207',
            muted:   '#422006',
          },
          indigo: {
            bright:  '#818cf8',
            DEFAULT: '#6366f1',
            dim:     '#4338ca',
          },
        },
        text: {
          primary:   '#f8fafc',
          secondary: '#cbd5e1',
          muted:     '#94a3b8',
        },
        border: {
          subtle: 'rgba(255,255,255,0.05)',
          strong: 'rgba(255,255,255,0.10)',
          gold:   'rgba(234,179,8,0.20)',
        },
      },

      maxWidth: {
        site: '1140px',
      },

      borderRadius: {
        sm:   '4px',
        DEFAULT: '4px',
        lg:   '12px',
        xl:   '20px',
        '2xl':'24px',
        '3xl':'32px',
        '4xl':'40px',
      },

      /* ─── Spacing / padding ─── */
      spacing: {
        safe: 'env(safe-area-inset-bottom, 0px)',
      },
      padding: {
        safe: 'env(safe-area-inset-bottom, 0px)',
      },

      /* ─── Shadows ─── */
      boxShadow: {
        gold:       '0 0 30px rgba(234,179,8,0.15)',
        indigo:     '0 0 30px rgba(99,102,241,0.15)',
        'indigo-sm':'0 4px 12px rgba(99,102,241,0.20)',
        'indigo-md':'0 8px 20px rgba(99,102,241,0.40)',
        'indigo-lg':'0 10px 35px rgba(79,70,229,0.45)',
        'indigo-xl':'0 14px 42px rgba(99,102,241,0.55)',
        'premium':  '0 8px 40px 0 rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.05)',
        'card-hover':'0 25px 80px rgba(0,0,0,0.65)',
      },

      /* ─── Backdrop blur ─── */
      backdropBlur: {
        xs:    '4px',
        sm:    '8px',
        DEFAULT:'12px',
        lg:    '16px',
        xl:    '24px',
        '2xl': '40px',
        '3xl': '64px',
      },

      /* ─── Background images ─── */
      backgroundImage: {
        'mesh-gradient':
          'radial-gradient(at 0% 0%, rgba(99,102,241,0.15) 0px, transparent 50%), ' +
          'radial-gradient(at 100% 0%, rgba(234,179,8,0.05) 0px, transparent 50%), ' +
          'radial-gradient(at 100% 100%, rgba(99,102,241,0.10) 0px, transparent 50%), ' +
          'radial-gradient(at 0% 100%, rgba(234,179,8,0.05) 0px, transparent 50%)',
        'gradient-indigo': 'linear-gradient(135deg, #818cf8 0%, #6366f1 100%)',
        'gradient-gold':   'linear-gradient(135deg, #fde047 0%, #eab308 100%)',
        'gradient-hero':
          'radial-gradient(circle at 20% 15%, rgba(99,102,241,0.20), transparent 40%), ' +
          'radial-gradient(circle at 80% 30%, rgba(234,179,8,0.16), transparent 38%), ' +
          'linear-gradient(180deg,#020617 0%,#020617 45%,#01030a 100%)',
      },

      /* ─── Easing ─── */
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.32, 0.72, 0, 1)',
        smooth: 'cubic-bezier(0.16, 1, 0.3, 1)',
        expo:   'cubic-bezier(0.4, 0, 0.2, 1)',
      },

      /* ─── Animations ─── */
      animation: {
        fadeup:          'fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) both',
        float:           'float 9s ease-in-out infinite',
        blink:           'blink 1.1s step-end infinite',
        'slide-in-right':'slideInRight 0.5s cubic-bezier(0.32,0.72,0,1) both',
        'fade-in':       'fadeIn 0.4s ease both',
        'float-slow':    'floatSlow 8s ease-in-out infinite',
        'spin-slow':     'spinSlow 20s linear infinite',
        ticker:          'ticker 30s linear infinite',
        shimmer:         'shimmer 3s linear infinite',
        'glow-pulse':    'glowPulse 3s ease-in-out infinite',
        'slide-up':      'slideUp 0.6s cubic-bezier(0.16,1,0.3,1) forwards',
        'scale-in':      'scaleIn 0.5s cubic-bezier(0.16,1,0.3,1) forwards',
        'rotate-slow':   'rotateSlow 30s linear infinite',
        'text-reveal':   'textReveal 1.2s cubic-bezier(0.77,0,0.175,1) forwards',
      },

      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(22px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-18px)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
        slideInRight: {
          from: { opacity: '0', transform: 'translateX(20px)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%':      { transform: 'translateY(-20px) scale(1.05)' },
        },
        spinSlow: {
          from: { transform: 'rotate(0deg)' },
          to:   { transform: 'rotate(360deg)' },
        },
        ticker: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.5', filter: 'blur(20px)' },
          '50%':      { opacity: '1',   filter: 'blur(30px)' },
        },
        slideUp: {
          from: { transform: 'translateY(30px)', opacity: '0' },
          to:   { transform: 'translateY(0)',    opacity: '1' },
        },
        scaleIn: {
          from: { transform: 'scale(0.9)', opacity: '0' },
          to:   { transform: 'scale(1)',   opacity: '1' },
        },
        rotateSlow: {
          from: { transform: 'rotate(0deg)' },
          to:   { transform: 'rotate(360deg)' },
        },
        textReveal: {
          '0%':   { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)',    opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
