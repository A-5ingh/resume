import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useCertifications } from '../../context/ResumeContext';

const Certifications = () => {
  const certifications = useCertifications();

  return (
    <CertificationsSection id="certifications">
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Certifications
      </SectionTitle>
      <CertificationsGrid>
        {certifications.map((cert, index) => (
          <CertificationCard
            key={`${cert.name}-${cert.date}`}
            as={motion.div}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              type: "spring",
              stiffness: 100
            }}
          >
            <CertName>{cert.name}</CertName>
            <CertInfo>
              <CertIssuer>{cert.issuer}</CertIssuer>
              <CertDate>{cert.date}</CertDate>
            </CertInfo>
          </CertificationCard>
        ))}
      </CertificationsGrid>
    </CertificationsSection>
  );
};

const CertificationsSection = styled.section`
  padding: 5rem 0;
  margin-bottom: 2rem;
  background: ${({ theme }) => theme.backgroundSecondary};
  position: relative;
  overflow: hidden;

  &::before, &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      ${({ theme }) => theme.primary}33,
      transparent
    );
  }

  &::before {
    top: 0;
  }

  &::after {
    bottom: 0;
  }
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 3rem;
`;

const CertificationsGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const CertificationCard = styled.div`
  background: ${({ theme }) => theme.background};
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px ${({ theme }) => theme.shadow};
  border: 1px solid ${({ theme }) => theme.border};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  cursor: pointer;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 16px;
    padding: 1px;
    background: linear-gradient(
      45deg,
      ${({ theme }) => theme.primary},
      ${({ theme }) => `${theme.primary}33`}
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px ${({ theme }) => theme.shadow};

    &::before {
      opacity: 1;
    }
  }
`;

const CertName = styled.h3`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.primary},
      ${({ theme }) => `${theme.primary}33`}
    );
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  ${CertificationCard}:hover &::after {
    transform: scaleX(1);
  }
`;

const CertInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

const CertIssuer = styled.span`
  color: ${({ theme }) => theme.primary};
  font-weight: 600;
  font-size: 0.9rem;
`;

const CertDate = styled.span`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 0.9rem;
`;

export default Certifications;
