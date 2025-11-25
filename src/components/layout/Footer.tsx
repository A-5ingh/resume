import styled from 'styled-components';
import { usePersonalInfo } from '../../context/ResumeContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { name } = usePersonalInfo();

  return (
    <FooterWrapper>
      <FooterContent>
        <Copyright>© {currentYear} {name}. All rights reserved.</Copyright>
        <FooterText>
          Built with React + TypeScript • Hosted on GitHub Pages • ❤️ with Vibe Coding
        </FooterText>
      </FooterContent>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  padding: 2rem 0;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  border-top: 1px solid ${({ theme }) => theme.border};

  @media print {
    display: none;
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
`;

const Copyright = styled.p`
  color: ${({ theme }) => theme.text};
  margin-bottom: 0.5rem;
`;

const FooterText = styled.p`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 0.9rem;
`;

export default Footer;
