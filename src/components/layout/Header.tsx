import styled from 'styled-components';
import { BsSun, BsMoon, BsList, BsX, BsPerson, BsBriefcase, BsTools, BsFolder, BsAward, BsEnvelope, BsGithub } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface HeaderProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const Header = ({ toggleTheme, isDarkMode }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderWrapper>
      <Logo
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        AS
      </Logo>
      <NavControls>
        <NavList>
          <NavItem>
            <NavLink href="https://github.com/A-5ingh/resume" target="_blank" title="GitHub">
              ⭐️ <BsGithub size={20} />
            </NavLink>
          </NavItem>
        </NavList>
        <MenuToggle onClick={toggleSidebar}>
          {isOpen ? <BsX size={24} /> : <BsList size={24} />}
        </MenuToggle>

        <ThemeToggle onClick={toggleTheme}>
          {isDarkMode ? <BsSun /> : <BsMoon />}
        </ThemeToggle>
      </NavControls>
      <Sidebar
        initial={false}
        animate={{ width: isOpen ? '250px' : '60px' }}
        transition={{ type: 'tween', duration: 0.3 }}
      >
        <NavList>
          <NavItem>
            <NavLink href="#about" title="About" $isActive={activeSection === 'about'}>
              <NavIcon><BsPerson size={20} /></NavIcon>
              <NavText isOpen={isOpen}>About</NavText>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#experience" title="Experience" $isActive={activeSection === 'experience'}>
              <NavIcon><BsBriefcase size={20} /></NavIcon>
              <NavText isOpen={isOpen}>Experience</NavText>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#skills" title="Skills" $isActive={activeSection === 'skills'}>
              <NavIcon><BsTools size={20} /></NavIcon>
              <NavText isOpen={isOpen}>Skills</NavText>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#projects" title="Projects" $isActive={activeSection === 'projects'}>
              <NavIcon><BsFolder size={20} /></NavIcon>
              <NavText isOpen={isOpen}>Projects</NavText>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#certifications" title="Certifications" $isActive={activeSection === 'certifications'}>
              <NavIcon><BsAward size={20} /></NavIcon>
              <NavText isOpen={isOpen}>Certifications</NavText>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#contact" title="Contact" $isActive={activeSection === 'contact'}>
              <NavIcon><BsEnvelope size={20} /></NavIcon>
              <NavText isOpen={isOpen}>Contact</NavText>
            </NavLink>
          </NavItem>
        </NavList>
      </Sidebar>
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
  background-color: ${props => props.theme.background};
  border-bottom: 1px solid ${props => props.theme.border};
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease-in-out;
`;

const NavControls = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const MenuToggle = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.text};
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s ease;

  &:hover {
    color: ${props => props.theme.primary};
  }
`;

const Sidebar = styled(motion.nav)`
  position: fixed;
  top: 64px;
  right: 0;
  height: calc(100vh - 64px);
  background-color: ${props => props.theme.background};
  border-left: 1px solid ${props => props.theme.border};
  padding: 1rem 0.5rem;
  overflow-y: auto;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
`;

const Logo = styled(motion.div)`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${props => props.theme.primary};
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li``;

const NavLink = styled.a<{ $isActive?: boolean }>`
  color: ${props => props.$isActive ? props.theme.primary : props.theme.text};
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: ${props => props.$isActive ? props.theme.border : 'transparent'};

  &:hover {
    color: ${props => props.theme.primary};
    background-color: ${props => props.theme.border};
  }
`;

const NavIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
`;

const NavText = styled.span<{ isOpen: boolean }>`
  margin-left: 0.75rem;
  opacity: ${props => (props.isOpen ? 1 : 0)};
  visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
  transition: all 0.2s ease;
  white-space: nowrap;
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.text};
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: color 0.2s ease;

  &:hover {
    color: ${props => props.theme.primary};
  }
`;

export default Header;
