import type { ThemeConfig } from './types';

export const themeConfig: ThemeConfig = {
  light: {
    primary: '#2EA043',
    secondary: '#0D1117',
    text: '#24292F',
    textSecondary: '#57606A',
    background: '#FFFFFF',
    backgroundSecondary: '#F6F8FA',
    border: '#D0D7DE',
    shadow: 'rgba(27, 31, 35, 0.04)',
    hover: '#F3F4F6'
  },
  dark: {
    primary: '#2EA043',
    secondary: '#161B22',
    text: '#C9D1D9',
    textSecondary: '#8B949E',
    background: '#0D1117',
    backgroundSecondary: '#161B22',
    border: '#30363D',
    shadow: 'rgba(0, 0, 0, 0.3)',
    hover: '#21262D'
  },
  defaultMode: 'dark'
};

// Export settings
export const exportConfig = {
  pdf: {
    format: 'A4',
    margin: 20,
    scaling: 0.8
  },
  word: {
    format: 'A4',
    margin: 20
  },
  powerpoint: {
    format: '16:9'
  }
} as const;

// Font configuration
export const fontConfig = {
  primary: "'JetBrains Mono', monospace",
  secondary: "'Fira Code', monospace",
  // For better font loading performance
  preloadUrls: [
    'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap',
    'https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&display=swap'
  ]
};
