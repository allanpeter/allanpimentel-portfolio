/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        base: {
          950: '#05090f',
          900: '#0a111a',
          800: '#101b28'
        },
        neon: {
          green: '#19f7a1',
          blue: '#2dc3ff'
        }
      },
      boxShadow: {
        glow: '0 0 24px rgba(45, 195, 255, 0.35)',
        glowGreen: '0 0 24px rgba(25, 247, 161, 0.35)'
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace']
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)'
      }
    }
  },
  plugins: []
}
