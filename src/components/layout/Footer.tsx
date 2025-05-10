import styled from 'styled-components';
import { motion } from 'framer-motion';
import { usePersonalInfo, useResume } from '../../context/ResumeContext';
import { BsDownload, BsFileText, BsFilePpt } from 'react-icons/bs';
import { exportAsPDF, exportAsDoc, exportAsPPT } from '../../utils/exportHelpers';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { name } = usePersonalInfo();

  const { data } = useResume();
  
  const handleExport = (format: 'pdf' | 'doc' | 'ppt') => {
    
    switch (format) {
      case 'pdf':
        exportAsPDF(data);
        break;
      case 'doc':
        exportAsDoc(data);
        break;
      case 'ppt':
        exportAsPPT(data);
        break;
    }
  };

  return (
    <FooterWrapper>
      <FooterContent>
        <Copyright>© {currentYear} {name}. All rights reserved.</Copyright>
        <ExportOptions>
          <ExportButton onClick={() => handleExport('pdf')}>
            <BsDownload /> PDF
          </ExportButton>
          <ExportButton onClick={() => handleExport('doc')}>
            <BsFileText /> DOC
          </ExportButton>
          <ExportButton onClick={() => handleExport('ppt')}>
            <BsFilePpt /> PPT
          </ExportButton>
        </ExportOptions>
        <FooterText>
          Built with React + TypeScript • Hosted on GitHub Pages
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

const ExportOptions = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
  justify-content: center;
`;

const ExportButton = styled(motion.button).attrs(() => ({
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 }
}))`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: 1px solid ${({ theme }) => theme.border};
  background-color: ${({ theme }) => theme.backgroundSecondary};
  color: ${({ theme }) => theme.text};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: white;
    border-color: ${({ theme }) => theme.primary};
  }

  svg {
    font-size: 1.1rem;
  }
`;

export default Footer;
