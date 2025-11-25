import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useExperience } from '../../context/ResumeContext';
import { GlassCard } from '../shared/GlassCard';
import { GradientText } from '../shared/GradientText';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experience = useExperience();

  return (
    <ExperienceSection id="experience">
      <SectionTitle>
        <GradientText>Experience</GradientText>
      </SectionTitle>
      <Timeline>
        {experience.map((item, index) => (
          <TimelineItem
            key={item.role}
            as={motion.div}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.2 }}
          >
            <TimelineContent>
              <GlassCard>
                <Header>
                  <RoleWrapper>
                    <IconBox>
                      <Briefcase size={20} />
                    </IconBox>
                    <div>
                      <Role>{item.role}</Role>
                      <Company>{item.company}</Company>
                    </div>
                  </RoleWrapper>
                  <Period>
                    <Calendar size={16} />
                    {item.period}
                  </Period>
                </Header>
                <Description>{item.description}</Description>
                <TechStack>
                  {item.technologies.map((tech) => (
                    <TechTag key={tech}>{tech}</TechTag>
                  ))}
                </TechStack>
              </GlassCard>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </ExperienceSection>
  );
};

const ExperienceSection = styled.section`
  padding: 6rem 2rem;
  background: ${({ theme }) => theme.background};
  position: relative;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 4rem;
`;

const Timeline = styled.div`
  max-width: 900px;
  margin: 0 auto;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: ${({ theme }) => theme.border};
    
    @media (min-width: 768px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const TimelineItem = styled.div`
  margin-bottom: 4rem;
  position: relative;
  
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    
    &:nth-child(odd) {
      justify-content: flex-start;
      
      & > div {
        margin-right: 50%;
        padding-right: 2rem;
      }
    }
    
    &:nth-child(even) {
      justify-content: flex-end;
      
      & > div {
        margin-left: 50%;
        padding-left: 2rem;
      }
    }
  }
`;

const TimelineContent = styled.div`
  position: relative;
  width: 100%;
  
  @media (max-width: 768px) {
    padding-left: 2rem;
    
    &::before {
      content: '';
      position: absolute;
      left: -5px;
      top: 24px;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: ${({ theme }) => theme.primary};
      border: 2px solid ${({ theme }) => theme.background};
    }
  }
  
  @media (min-width: 768px) {
    &::before {
      content: '';
      position: absolute;
      top: 24px;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: ${({ theme }) => theme.primary};
      border: 4px solid ${({ theme }) => theme.background};
      z-index: 1;
    }
    
    ${TimelineItem}:nth-child(odd) &::before {
      right: -2rem;
      transform: translateX(50%);
    }
    
    ${TimelineItem}:nth-child(even) &::before {
      left: -2rem;
      transform: translateX(-50%);
    }
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const RoleWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const IconBox = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: ${({ theme }) => theme.primary}20;
  color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Role = styled.h3`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 0.25rem;
`;

const Company = styled.div`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 0.9rem;
`;

const Period = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.textSecondary};
  font-size: 0.9rem;
  background: ${({ theme }) => theme.background};
  padding: 0.5rem 1rem;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.border};
`;

const Description = styled.p`
  color: ${({ theme }) => theme.textSecondary};
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TechTag = styled.span`
  background: ${({ theme }) => theme.primary}15;
  color: ${({ theme }) => theme.primary};
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
`;

export default Experience;
