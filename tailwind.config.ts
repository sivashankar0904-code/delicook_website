import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Sampled from the logo artwork: red #b92025, yellow #f2cf3b,
        // tagline brown #3c1d11.
        brand: {
          red: '#B92025',
          coral: '#D9432F',
          amber: '#E9A020',
          yellow: '#F2CF3B',
          brown: '#3C1D11',
          dot: '#D9432F',
        },
        ink: {
          DEFAULT: '#1A1A1A',
          muted: '#6B6B6B',
          faint: '#9A9A9A',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          grey: '#F7F7F7',
          cream: '#FDF6EC',
          placeholder: '#E2E2E2',
        },
        line: '#E8E8E8',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        shell: '1200px',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(90deg, #B92025 0%, #D14A20 45%, #E9A020 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
