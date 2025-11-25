import { createGlobalStyle } from 'styled-components';
import type { ThemeType } from './theme';
import { fontConfig } from '../data/themeConfig';

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${fontConfig.primary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: all 0.3s ease-in-out;
  }

  a {
    color: ${({ theme }) => theme.primary};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.text};
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${fontConfig.secondary};
  }

  code {
    font-family: ${fontConfig.secondary};
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.backgroundSecondary};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.border};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.textSecondary};
  }

  @media print {
    /* Hide everything by default */
    body > * {
      display: none !important;
    }

    /* Only show the root element and ensure it has no styles that could cause overlay */
    body, #root {
      display: block !important;
      background: white !important;
      height: auto !important;
      overflow: visible !important;
      position: static !important;
    }

    /* Hide the main app layout explicitly - targets any tag (header, main, footer, div) */
    #root > *:not(.print-only) {
      display: none !important;
      height: 0 !important;
      overflow: hidden !important;
      opacity: 0 !important;
      visibility: hidden !important;
    }

    /* Show the print template */
    .print-only {
      display: block !important;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      margin: 0;
      padding: 20px;
      z-index: 9999;
      background: white;
    }

    /* Reset global styles for print */
    * {
      box-shadow: none !important;
      text-shadow: none !important;
      background: transparent !important;
      color: black !important;
      transition: none !important;
    }
  }
`;
