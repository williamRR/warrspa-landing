export const theme = {
  colors: {
    primary: {
      50: 'var(--primary-50)',
      100: 'var(--primary-100)',
      200: 'var(--primary-200)',
      300: 'var(--primary-300)',
      400: 'var(--primary-400)',
      500: 'var(--primary-500)',
      600: 'var(--primary-600)',
      700: 'var(--primary-700)',
      800: 'var(--primary-800)',
      900: 'var(--primary-900)',
    },
    secondary: {
      50: 'var(--secondary-50)',
      100: 'var(--secondary-100)',
      200: 'var(--secondary-200)',
      300: 'var(--secondary-300)',
      400: 'var(--secondary-400)',
      500: 'var(--secondary-500)',
      600: 'var(--secondary-600)',
      700: 'var(--secondary-700)',
      800: 'var(--secondary-800)',
      900: 'var(--secondary-900)',
    },
    background: {
      primary: 'var(--background-primary)',
      secondary: 'var(--background-secondary)',
      tertiary: 'var(--background-tertiary)',
      surface: 'var(--surface)',
    },
    text: {
      primary: 'var(--text-primary)',
      secondary: 'var(--text-secondary)',
      muted: 'var(--text-muted)',
    },
    accent: {
      purple: 'var(--accent-purple)',
      pink: 'var(--accent-pink)',
      blue: 'var(--accent-blue)',
    },
  },
  gradients: {
    primary: 'var(--gradient-primary)',
    background: 'var(--gradient-background)',
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    '2xl': '4rem',
    '3xl': '6rem',
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    xl: '1.5rem',
    full: '9999px',
  },
} as const;

export type Theme = typeof theme;
