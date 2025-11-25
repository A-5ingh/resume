import type { ThemeConfig, ThemeName } from './types';

export const themes: Record<ThemeName, ThemeConfig> = {
  aurora: {
    light: {
      primary: '#6366F1', // Indigo
      secondary: '#F0F4F8',
      text: '#1E293B',
      textSecondary: '#475569',
      background: '#FFFFFF',
      backgroundSecondary: '#F8FAFC',
      border: '#E2E8F0',
      shadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      hover: '#F1F5F9',
      accent: 'linear-gradient(135deg, #6366F1 0%, #A855F7 100%)' // Indigo to Purple
    },
    dark: {
      primary: '#22D3EE', // Cyan
      secondary: '#0F172A',
      text: '#F8FAFC',
      textSecondary: '#94A3B8',
      background: '#020617', // Deep Slate
      backgroundSecondary: '#0F172A',
      border: 'rgba(255, 255, 255, 0.08)',
      shadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.3)',
      hover: 'rgba(255, 255, 255, 0.03)',
      accent: 'linear-gradient(135deg, #22D3EE 0%, #A855F7 100%)' // Cyan to Purple (Cyberpunk/AI)
    }
  },
  pastel: {
    light: {
      primary: '#8B5CF6', // Soft Purple
      secondary: '#FDF2F8', // Pinkish White
      text: '#4B5563',
      textSecondary: '#6B7280',
      background: '#FFF1F2', // Rose 50
      backgroundSecondary: '#FFF7ED', // Orange 50
      border: '#FECDD3',
      shadow: '0 4px 6px -1px rgba(255, 182, 193, 0.3)',
      hover: '#FFE4E6',
      accent: 'linear-gradient(135deg, #F9A8D4 0%, #C4B5FD 100%)' // Pink to Purple Pastel
    },
    dark: {
      primary: '#F472B6', // Pink 400
      secondary: '#292524',
      text: '#E7E5E4',
      textSecondary: '#A8A29E',
      background: '#1C1917', // Stone 900
      backgroundSecondary: '#292524',
      border: '#44403C',
      shadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
      hover: '#44403C',
      accent: 'linear-gradient(135deg, #F472B6 0%, #A78BFA 100%)' // Pink to Purple Pastel Dark
    }
  },
  neon: {
    light: {
      primary: '#06B6D4', // Cyan
      secondary: '#F0F9FF',
      text: '#111827',
      textSecondary: '#374151',
      background: '#FFFFFF',
      backgroundSecondary: '#F0F9FF',
      border: '#A5F3FC',
      shadow: '0 4px 6px -1px rgba(6, 182, 212, 0.2)',
      hover: '#E0F2FE',
      accent: 'linear-gradient(135deg, #22D3EE 0%, #34D399 100%)' // Cyan to Emerald
    },
    dark: {
      primary: '#39FF14', // Neon Green
      secondary: '#111111',
      text: '#FFFFFF',
      textSecondary: '#D1D5DB',
      background: '#000000', // Pure Black
      backgroundSecondary: '#111111',
      border: '#333333',
      shadow: '0 0 10px rgba(57, 255, 20, 0.5)',
      hover: '#1A1A1A',
      accent: 'linear-gradient(135deg, #39FF14 0%, #00FFFF 100%)' // Neon Green to Cyan
    }
  }
};

export const themeConfig = themes.aurora; // Default for backward compatibility if needed

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
  }
} as const;

// Font configuration
export const fontConfig = {
  primary: "'Inter', sans-serif",
  secondary: "'Outfit', sans-serif",
  // For better font loading performance
  preloadUrls: [
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
    'https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap'
  ]
};
