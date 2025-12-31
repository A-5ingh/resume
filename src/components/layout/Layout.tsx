import type { ReactNode } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../styles/globalStyles';
import Header from './Header';
import Footer from './Footer';
import BackgroundStars from '../animations/BackgroundRipple';
import { useTheme } from '../../context/ThemeContext';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { currentTheme } = useTheme();

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles theme={currentTheme} />
      <BackgroundStars />
      <Header />
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
