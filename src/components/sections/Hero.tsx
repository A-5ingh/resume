import styled from 'styled-components';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <HeroSection id="about">
      <ContentWrapper>
        <Motion
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Greeting>Hello, I'm</Greeting>
          <Name>Amarbir Singh</Name>
          <Title>DevOps Architect & Full Stack Developer</Title>
          <Description>
            With 14 years of experience in software development, cloud architecture, and DevOps,
            I specialize in building scalable infrastructure and delivering robust solutions.
            Certified in Azure and GCP, with expertise in MERN/MEAN stack development.
          </Description>
          <Stats>
            <StatItem>
              <StatNumber>14+</StatNumber>
              <StatLabel>Years Experience</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>2</StatNumber>
              <StatLabel>Cloud Certifications</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>2</StatNumber>
              <StatLabel>Open Source Projects</StatLabel>
            </StatItem>
          </Stats>
          <CTAContainer>
            <PrimaryButton href="#contact">Get in Touch</PrimaryButton>
            <SecondaryButton href="https://github.com/a-5ingh" target="_blank">
              View GitHub
            </SecondaryButton>
          </CTAContainer>
        </Motion>
      </ContentWrapper>
    </HeroSection>
  );
};

const HeroSection = styled.section`
  min-height: calc(100vh - 64px);
  display: flex;
  align-items: center;
  padding: 2rem 0;
`;

const ContentWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Motion = styled(motion.div)`
  text-align: left;
`;

const Greeting = styled.h2`
  color: ${({ theme }) => theme.primary};
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const Name = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text};

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.textSecondary};
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.textSecondary};
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 600px;
`;

const Stats = styled.div`
  display: flex;
  gap: 3rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
    flex-wrap: wrap;
  }
`;

const StatItem = styled.div`
  text-align: left;
`;

const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.textSecondary};
`;

const CTAContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Button = styled.a`
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease;
  display: inline-block;
`;

const PrimaryButton = styled(Button)`
  background-color: ${({ theme }) => theme.primary};
  color: white;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(46, 160, 67, 0.4);
  }
`;

const SecondaryButton = styled(Button)`
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.border};

  &:hover {
    background-color: ${({ theme }) => theme.backgroundSecondary};
    transform: translateY(-2px);
  }
`;

export default Hero;
