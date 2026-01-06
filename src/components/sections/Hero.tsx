import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useResume } from '../../context/ResumeContext';
import { TypeAnimation } from 'react-type-animation';
import { GradientText } from '../shared/GradientText';
import { ArrowRight, Github } from 'lucide-react';

const Hero = () => {
  const { data } = useResume();
  const { name, role, summary, avatarUrl } = data.personal;

  return (
    <HeroSection id="about">
      <BackgroundGradient />
      <ContentWrapper>
        {avatarUrl && (
          <Avatar
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img src={avatarUrl} alt={name} />
          </Avatar>
        )}
        <HeroContent
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Greeting>Hello 👋, I'm</Greeting>
          <Name>
            <GradientText>{name}</GradientText>
          </Name>
          <Title>
            <TypeAnimation
              sequence={[1000, role]}
              speed={50}
              cursor={true}
            />
          </Title>
          <Description
            as={motion.p}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            {summary}
          </Description>

          <CTAContainer
            as={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <PrimaryButton href="#contact">
              Get in Touch <ArrowRight size={20} />
            </PrimaryButton>
            <SecondaryButton href="https://github.com/a-5ingh" target="_blank">
              <Github size={20} /> View GitHub
            </SecondaryButton>
          </CTAContainer>
        </HeroContent>
      </ContentWrapper>
    </HeroSection>
  );
};

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 2rem 1.5rem;
  
  @media (max-width: 768px) {
    padding: 2rem 1rem;
    min-height: auto;
  }
`;

const BackgroundGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 30%, ${({ theme }) => theme.primary}15 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, ${({ theme }) => theme.primary}15 0%, transparent 50%);
  filter: blur(60px);
  z-index: 0;
  pointer-events: none;
`;

const ContentWrapper = styled.div`
  max-width: 1000px;
  width: 100%;
  position: relative;
  z-index: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeroContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Greeting = styled.h2`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 500;
`;

const Name = styled.h1`
  font-size: 5rem;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  padding-bottom: 0.2em;
  word-break: break-word;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
`;

const Title = styled.div`
  font-size: 2rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 4rem;
  height: 3rem;
  line-height: 1.5;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    height: auto;
    min-height: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.textSecondary};
  line-height: 1.8;
  margin-bottom: 3rem;
  max-width: 700px;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
    max-width: 100%;
    padding: 0 1rem;
  }
`;

const CTAContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const Button = styled.a`
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  transition: all 0.3s ease;
  white-space: nowrap;
  
  @media (max-width: 768px) {
    padding: 0.9rem 1.5rem;
    font-size: 1rem;
    white-space: normal;
  }
`;

const PrimaryButton = styled(Button)`
  background: ${({ theme }) => theme.accent};
  color: white;
  border: none;
  box-shadow: 0 4px 15px ${({ theme }) => theme.primary}40;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px ${({ theme }) => theme.primary}60;
  }
`;

const SecondaryButton = styled(Button)`
  background: ${({ theme }) => theme.backgroundSecondary};
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.border};

  &:hover {
    background: ${({ theme }) => theme.border};
    transform: translateY(-2px);
  }
`;

const Avatar = styled(motion.div)`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 2rem;
  padding: 4px;
  background: ${({ theme }) => theme.accent};
  box-shadow: 0 0 20px ${({ theme }) => theme.primary}40;
  
  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
    margin-bottom: 1.5rem;
  }
  
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid ${({ theme }) => theme.background};
  }
`;

export default Hero;
