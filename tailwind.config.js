/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#080B14',
        surface: '#101626',
        elevated: '#151C2E',
        line: 'rgba(148, 163, 184, 0.14)',
        accent: {
          DEFAULT: '#3D8BFF',
          strong: '#2B74E8',
          muted: 'rgba(61, 139, 255, 0.12)',
        },
        violet: {
          DEFAULT: '#8B5CFF',
          muted: 'rgba(139, 92, 255, 0.14)',
        },
        ink: '#F8FAFC',
        muted: '#94A3B8',
        dim: '#6B7690',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        display: ['clamp(2.25rem, 5vw, 3.75rem)', { lineHeight: '1.08', letterSpacing: '-0.04em', fontWeight: '700' }],
        title: ['clamp(1.5rem, 3vw, 2rem)', { lineHeight: '1.2', letterSpacing: '-0.03em', fontWeight: '600' }],
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        30: '7.5rem',
      },
      maxWidth: {
        content: '72rem',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(61,139,255,0.16), 0 22px 50px -28px rgba(61,139,255,0.45)',
        card: '0 1px 0 0 rgba(255,255,255,0.04), 0 24px 48px -28px rgba(0,0,0,0.72)',
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(to right, rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.06) 1px, transparent 1px)',
        'hero-radial':
          'radial-gradient(ellipse 70% 50% at 80% 10%, rgba(61,139,255,0.12), transparent 55%), radial-gradient(ellipse 50% 40% at 10% 80%, rgba(139,92,255,0.1), transparent 50%)',
      },
      backgroundSize: {
        grid: '44px 44px',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '0.35' },
          '50%': { opacity: '1' },
        },
        caret: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        pulseDot: 'pulseDot 2.8s ease-in-out infinite',
        caret: 'caret 1s step-end infinite',
      },
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  plugins: [],
}
