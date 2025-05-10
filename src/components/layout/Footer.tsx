import styled from 'styled-components';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterWrapper>
      <FooterContent>
        <Copyright>© {currentYear} Amarbir Singh. All rights reserved.</Copyright>
        <FooterText>
          Built with React + TypeScript • Hosted on GitHub Pages • Designed with ❤️ Cline + Claude • Vibe Coding
        </FooterText>
      </FooterContent>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  padding: 2rem 0;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  border-top: 1px solid ${({ theme }) => theme.border};
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
