import { useState } from 'react';
import type { ReactNode } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../../styles/theme';
import { GlobalStyles } from '../../styles/globalStyles';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <Main>{children}</Main>
      <Footer />
    </ThemeProvider>
  );
};

const Main = styled.main`
  margin-top: 64px;
  min-height: calc(100vh - 64px);
  padding: 2rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 1200px) {
    padding: 2rem 1rem;
  }
`;

export default Layout;
