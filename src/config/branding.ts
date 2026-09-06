/**
 * SYRPETRO Smart Platform - Branding Configuration
 * Meshhadani International Group Visual Identity
 */

export const BrandingConfig = {
  // Primary Colors - Based on Meshhadani Logo
  colors: {
    primary: {
      main: '#C41E3A',      // Deep Red/Crimson (Main Logo Color)
      light: '#E63946',     // Lighter Red
      dark: '#A01729',      // Darker Red
    },
    secondary: {
      main: '#F77F00',      // Gold/Orange Accent
      light: '#FCBF49',     // Light Gold
      dark: '#D66E0C',      // Dark Gold
    },
    accent: {
      white: '#FFFFFF',
      black: '#1A1A1A',
      gray: '#F5F5F5',
      darkGray: '#333333',
    },
  },

  // Typography
  typography: {
    fontFamily: {
      primary: "'Segoe UI', 'Helvetica Neue', sans-serif",
      secondary: "'Cairo', 'Arabic Typesetting', sans-serif", // For Arabic text
    },
    sizes: {
      h1: '2.5rem',
      h2: '2rem',
      h3: '1.5rem',
      body: '1rem',
      small: '0.875rem',
    },
  },

  // Logo Configuration
  logo: {
    name: 'Meshhadani International Group',
    shortName: 'Meshhadani',
    logoPath: '/assets/logo/meshhadani-logo.svg',
    faviconPath: '/assets/favicon/favicon.ico',
    backgroundColor: '#C41E3A',
  },

  // Exhibition Details
  exhibition: {
    name: 'SYRPETRO',
    fullName: 'Syria International Petroleum, Energy & Mineral Wealth Expo',
    tagline: 'من الطاقة إلى المستقبل - From Energy to the Future',
    organizer: 'Meshhadani International Group',
    year: 2027,
  },

  // UI Spacing & Layout
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },

  // Border Radius
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    round: '50%',
  },
};

export default BrandingConfig;