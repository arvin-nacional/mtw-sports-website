/** @type {import('tailwindcss').Config} */
const config = {
  theme: {
    extend: {
      colors: {
        // Design System Colors - Kinetic Apex
        surface: '#f7f9fb',
        'surface-dim': '#d8dadc',
        'surface-bright': '#f7f9fb',
        'surface-container-lowest': '#ffffff',
        'surface-container-low': '#f2f4f6',
        'surface-container': '#eceef0',
        'surface-container-high': '#e6e8ea',
        'surface-container-highest': '#e0e3e5',
        'on-surface': '#191c1e',
        'on-surface-variant': '#45464d',
        'inverse-surface': '#2d3133',
        'inverse-on-surface': '#eff1f3',
        outline: '#76777d',
        'outline-variant': '#c6c6cd',
        'surface-tint': '#565e74',
        primary: '#000000',
        'on-primary': '#ffffff',
        'primary-container': '#131b2e',
        'on-primary-container': '#7c839b',
        'inverse-primary': '#bec6e0',
        secondary: '#006398',
        'on-secondary': '#ffffff',
        'secondary-container': '#5bb8fe',
        'on-secondary-container': '#00476e',
        tertiary: '#000000',
        'on-tertiary': '#ffffff',
        'tertiary-container': '#001e2c',
        'on-tertiary-container': '#008ebf',
        error: '#ba1a1a',
        'on-error': '#ffffff',
        'error-container': '#ffdad6',
        'on-error-container': '#93000a',
        'primary-fixed': '#dae2fd',
        'primary-fixed-dim': '#bec6e0',
        'on-primary-fixed': '#131b2e',
        'on-primary-fixed-variant': '#3f465c',
        'secondary-fixed': '#cce5ff',
        'secondary-fixed-dim': '#93ccff',
        'on-secondary-fixed': '#001d31',
        'on-secondary-fixed-variant': '#004b73',
        'tertiary-fixed': '#c4e7ff',
        'tertiary-fixed-dim': '#7bd0ff',
        'on-tertiary-fixed': '#001e2c',
        'on-tertiary-fixed-variant': '#004c69',
        background: '#f7f9fb',
        'on-background': '#191c1e',
        'surface-variant': '#e0e3e5',
      },
      fontFamily: {
        geist: ['Geist', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'display-lg': ['48px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-lg-mobile': ['32px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        'headline-md': ['24px', { lineHeight: '1.3', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '1.5', fontWeight: '400' }],
        'label-sm': ['12px', { lineHeight: '1.4', letterSpacing: '0.05em', fontWeight: '500' }],
      },
      borderRadius: {
        sm: '0.125rem',
        DEFAULT: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        full: '9999px',
      },
      spacing: {
        'unit': '4px',
        'container-max-width': '1440px',
        'gutter': '24px',
        'margin-mobile': '16px',
        'margin-desktop': '40px',
      },
      maxWidth: {
        'container': '1440px',
      },
      boxShadow: {
        'elevated': '0 4px 12px rgba(15, 23, 42, 0.05)',
        'hover': '0 6px 16px rgba(15, 23, 42, 0.08)',
      },
      typography: {
        DEFAULT: {
          css: [
            {
              '--tw-prose-body': 'var(--on-background)',
              '--tw-prose-headings': 'var(--primary)',
              h1: {
                fontWeight: '700',
                marginBottom: '0.25em',
                fontFamily: 'Geist, sans-serif',
              },
              h2: {
                fontWeight: '600',
                fontFamily: 'Geist, sans-serif',
              },
              h3: {
                fontWeight: '600',
                fontFamily: 'Geist, sans-serif',
              },
            },
          ],
        },
        base: {
          css: [
            {
              h1: {
                fontSize: '2.5rem',
                fontWeight: '700',
              },
              h2: {
                fontSize: '1.25rem',
                fontWeight: '600',
              },
            },
          ],
        },
        md: {
          css: [
            {
              h1: {
                fontSize: '3.5rem',
                fontWeight: '700',
              },
              h2: {
                fontSize: '1.5rem',
                fontWeight: '600',
              },
            },
          ],
        },
      },
    },
  },
}

export default config
