import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0A0A0A',
        paper: '#F5F5F2',
        accent: {
          pink: '#FF3DBA',
          violet: '#7E3DFF',
        },
      },
      fontFamily: {
        display: ['"Archivo Black"', '"Anton"', 'system-ui', 'sans-serif'],
        body: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'mega': 'clamp(4rem, 18vw, 18rem)',
        'huge': 'clamp(2.5rem, 9vw, 8rem)',
      },
      letterSpacing: {
        'tightest': '-0.06em',
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(135deg, #FF3DBA 0%, #7E3DFF 100%)',
        'noise': "url('/noise.svg')",
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'float-slow': 'float 8s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
