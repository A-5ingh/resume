import styled from 'styled-components';
import { BsSun, BsMoon } from 'react-icons/bs';
import { motion } from 'framer-motion';

interface HeaderProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const Header = ({ toggleTheme, isDarkMode }: HeaderProps) => {
  return (
    <HeaderWrapper>
      <Logo
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Amarbir Singh
      </Logo>
      <Nav>
        <NavList>
          <NavItem>
            <NavLink href="#about">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#experience">Experience</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#skills">Skills</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#projects">Projects</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#certifications">Certifications</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#contact">Contact</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/A-5ingh/resume" target="_blank">⭐️ on GitHub</NavLink>
          </NavItem>
        </NavList>
        <ThemeToggle onClick={toggleTheme}>
          {isDarkMode ? <BsSun /> : <BsMoon />}
        </ThemeToggle>
      </Nav>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  padding: 0 2rem;
  background-color: ${({ theme }) => theme.background};
  border-bottom: 1px solid ${({ theme }) => theme.border};
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease-in-out;
`;

const Logo = styled(motion.div)`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.primary};
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const NavList = styled.ul`
  display: flex;
  gap: 1.5rem;
  list-style: none;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.li``;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

export default Header;
