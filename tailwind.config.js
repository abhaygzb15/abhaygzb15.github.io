/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        terminal: {
          // CSS variables — switching data-theme on <html> changes every color instantly
          green:        'var(--accent)',
          'green-dim':  'var(--accent-dim)',
          'green-glow': 'var(--accent-glow)',
          bg:           'var(--bg)',
          'bg-card':    'var(--bg-card)',
          border:       'var(--border)',
          muted:        'var(--muted)',
        },
      },
      animation: {
        'fade-in':    'fadeIn 0.6s ease-out',
        'slide-up':   'slideUp 0.6s ease-out',
        'blink':      'blink 1s step-end infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
        glowPulse: {
          '0%, 100%': { textShadow: '0 0 8px var(--accent)' },
          '50%':      { textShadow: '0 0 20px var(--accent), 0 0 40px var(--accent)' },
        },
      },
      boxShadow: {
        'terminal':    '0 0 20px color-mix(in srgb, var(--accent) 15%, transparent)',
        'terminal-lg': '0 0 40px color-mix(in srgb, var(--accent) 20%, transparent)',
      },
    },
  },
  plugins: [],
}
