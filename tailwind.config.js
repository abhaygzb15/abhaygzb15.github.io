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
        // CSS-variable-backed colors — auto-switch between dark/light
        // Variables hold space-separated RGB so opacity modifiers (bg-terminal-green/20) work
        terminal: {
          green:          'rgb(var(--tc-green)     / <alpha-value>)',
          'green-dim':    'rgb(var(--tc-green-dim) / <alpha-value>)',
          'green-glow':   'rgb(var(--tc-green-glow)/ <alpha-value>)',
          bg:             'rgb(var(--tc-bg)        / <alpha-value>)',
          'bg-card':      'rgb(var(--tc-bg-card)   / <alpha-value>)',
          border:         'rgb(var(--tc-border)    / <alpha-value>)',
          muted:          'rgb(var(--tc-muted)     / <alpha-value>)',
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
          '0%, 100%': { textShadow: '0 0 8px #00c853' },
          '50%':      { textShadow: '0 0 20px #00c853, 0 0 40px #00c853' },
        },
      },
      boxShadow: {
        'terminal':    '0 0 20px rgba(0, 200, 83, 0.15)',
        'terminal-lg': '0 0 40px rgba(0, 200, 83, 0.2)',
      },
    },
  },
  plugins: [],
}
