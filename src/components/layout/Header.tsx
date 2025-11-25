import { useState, useEffect } from 'react';
import styled, { useTheme as useStyledTheme } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, Moon, Sun } from 'lucide-react';
import { useResume } from '../../context/ResumeContext';
import { useTheme } from '../../context/ThemeContext';
import { exportAsPDF, exportAsDoc } from '../../utils/exportHelpers';
import ThemeSelector from './ThemeSelector';

const Header = () => {
  const [activeSection, setActiveSection] = useState<string>('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showExportMenu, setShowExportMenu] = useState(false);
  const { data } = useResume();
  const { isDarkMode, toggleTheme } = useTheme();
  const theme = useStyledTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <HeaderContainer $isScrolled={isScrolled}>
      <Nav>
        <Logo href="#">
          {data.personal.name.split(' ')[0]}
          <span style={{ color: theme.primary }}>.</span>
        </Logo>

        <DesktopMenu>
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              href={link.href}
              $isActive={activeSection === link.href.substring(1)}
            >
              {link.name}
            </NavLink>
          ))}
        </DesktopMenu>

        <Actions>
          <ThemeSelector />
          <IconButton onClick={toggleTheme} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </IconButton>

          <ExportContainer>
            <Button onClick={() => setShowExportMenu(!showExportMenu)}>
              <Download size={18} />
              <span>Export</span>
            </Button>

            <AnimatePresence>
              {showExportMenu && (
                <ExportMenu
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                >
                  <ExportOption onClick={() => { exportAsPDF(); setShowExportMenu(false); }}>
                    PDF (Print)
                  </ExportOption>
                  <ExportOption onClick={() => { exportAsDoc(data); setShowExportMenu(false); }}>
                    Word (ATS)
                  </ExportOption>
                </ExportMenu>
              )}
            </AnimatePresence>
          </ExportContainer>

          <MobileMenuButton onClick={() => setIsMobileMenuOpen(true)}>
            <Menu size={24} />
          </MobileMenuButton>
        </Actions>
      </Nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenuOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <MobileMenu
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              onClick={(e) => e.stopPropagation()}
            >
              <CloseButton onClick={() => setIsMobileMenuOpen(false)}>
                <X size={24} />
              </CloseButton>

              <MobileLinks>
                {navLinks.map((link) => (
                  <MobileLink
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    $isActive={activeSection === link.href.substring(1)}
                  >
                    {link.name}
                  </MobileLink>
                ))}
              </MobileLinks>

              <MobileActions>
                <ThemeSelector />
                <IconButton onClick={toggleTheme}>
                  {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                </IconButton>
              </MobileActions>
            </MobileMenu>
          </MobileMenuOverlay>
        )}
      </AnimatePresence>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header<{ $isScrolled: boolean }>`
  position: fixed;
  top: ${({ $isScrolled }) => ($isScrolled ? '1rem' : '0')};
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.3s ease;
  padding: ${({ $isScrolled }) => ($isScrolled ? '0 1rem' : '1rem 2rem')};
  display: flex;
  justify-content: center;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  background: ${({ theme }) => theme.backgroundSecondary}CC;
  backdrop-filter: blur(10px);
  padding: 0.75rem 1.5rem;
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.border};
  box-shadow: ${({ theme }) => theme.shadow};
`;

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-family: 'Outfit', sans-serif;
`;

const DesktopMenu = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a<{ $isActive?: boolean }>`
  color: ${({ theme, $isActive }) => ($isActive ? theme.primary : theme.textSecondary)};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: ${({ $isActive }) => ($isActive ? '100%' : '0')};
    height: 2px;
    background: ${({ theme }) => theme.primary};
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const IconButton = styled(motion.button)`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.hover};
  }
`;

const Button = styled.button`
  background: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
  }
`;

const ExportContainer = styled.div`
  position: relative;
`;

const ExportMenu = styled(motion.div)`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 0.5rem;
  background: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 0.5rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 150px;
  box-shadow: ${({ theme }) => theme.shadow};
`;

const ExportOption = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.text};
  padding: 0.5rem;
  text-align: left;
  cursor: pointer;
  border-radius: 0.25rem;
  transition: background 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.hover};
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenuOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2000;
`;

const MobileMenu = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  background: ${({ theme }) => theme.background};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
`;

const CloseButton = styled.button`
  align-self: flex-end;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
`;

const MobileLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const MobileLink = styled.a<{ $isActive?: boolean }>`
  font-size: 1.25rem;
  font-weight: 500;
  color: ${({ theme, $isActive }) => $isActive ? theme.primary : theme.text};
  text-decoration: none;
`;

const MobileActions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
`;

export default Header;
