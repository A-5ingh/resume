import styled from 'styled-components';
import type { DefaultTheme } from 'styled-components';
import { motion } from 'framer-motion';
import { useExperience } from '../../context/ResumeContext';

const Experience = () => {
  const experience = useExperience();

  return (
    <ExperienceSection id="experience">
      <SectionTitle>Experience</SectionTitle>
      <Timeline>
        {experience.map((item, index) => (
          <TimelineItem
            key={item.role}
            as={motion.div}
            initial={{ opacity: 0, x: -50, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 0.7,
              delay: index * 0.3,
              ease: [0.175, 0.885, 0.32, 1.275]
            }}
          >
            <TimelineContent>
              <RoleWrapper>
                {item.icon && <IconWrapper>{<item.icon size={24} />}</IconWrapper>}
                <div>
                  <Role>{item.role}</Role>
                  <Period>{item.period}</Period>
                </div>
              </RoleWrapper>
              <Description>{item.description}</Description>
              <TechStack>
                {item.technologies.map((tech) => (
                  <TechTag key={tech}>{tech}</TechTag>
                ))}
              </TechStack>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </ExperienceSection>
  );
};

const ExperienceSection = styled.section`
  padding: 4rem 2rem;
  background-color: ${({ theme }) => theme.background};

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  color: ${({ theme }) => theme.text};
  margin-bottom: 3rem;
`;

const Timeline = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 4px;
    height: 100%;
    background: ${({ theme }) => theme.primary};
    border-radius: 4px;
    opacity: 0.2;
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 0.2;
    }
    50% {
      opacity: 0.5;
    }
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const TimelineItem = styled.div`
  margin-bottom: 4rem;
  position: relative;
  padding-left: 3rem;

  &::before {
    content: '';
    position: absolute;
    left: -8px;
    top: 24px;
    width: 20px;
    height: 20px;
    background: ${({ theme }) => theme.background};
    border: 3px solid ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 4px ${({ theme }) => `${theme.primary}33`};
    animation: pulse-dot 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

    @keyframes pulse-dot {
      0%, 100% {
        box-shadow: 0 0 0 4px ${({ theme }) => `${theme.primary}33`};
      }
      50% {
        box-shadow: 0 0 0 8px ${({ theme }) => `${theme.primary}11`};
      }
    }
    border-radius: 50%;
    z-index: 1;
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    padding-left: 2rem;
  }
`;

const TimelineContent = styled.div<{ theme: DefaultTheme }>`
  background: ${({ theme }) => theme.backgroundSecondary};
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px ${({ theme }) => theme.shadow};
  border: 1px solid ${({ theme }) => theme.border};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  z-index: 1;

  &:hover {
    transform: translateY(-5px) translateX(5px);
    box-shadow: 
      0 8px 30px ${({ theme }) => theme.shadow},
      0 0 0 1px ${({ theme }) => theme.primary};
  }

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

  &:hover::before {
    opacity: 1;
  }
`;

const RoleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const IconWrapper = styled.div<{ theme: DefaultTheme }>`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const Role = styled.h3<{ theme: DefaultTheme }>`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
  margin: 0;
`;

const Period = styled.div<{ theme: DefaultTheme }>`
  color: ${({ theme }) => theme.primary};
  font-size: 1rem;
  margin-top: 0.25rem;
`;

const Description = styled.p<{ theme: DefaultTheme }>`
  color: ${({ theme }) => theme.textSecondary};
  line-height: 1.6;
  margin: 1rem 0;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const TechTag = styled.span<{ theme: DefaultTheme }>`
  background: ${({ theme }) => `${theme.primary}11`};
  color: ${({ theme }) => theme.primary};
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.875rem;
  border: 1px solid ${({ theme }) => `${theme.primary}33`};
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => `${theme.primary}22`};
    transform: translateY(-2px);
  }
`;

export default Experience;
