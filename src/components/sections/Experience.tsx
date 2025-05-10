import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useExperience } from '../../context/ResumeContext';

const Experience = () => {
  const experience = useExperience();
  return (
    <ExperienceSection id="experience">
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Career Journey
      </SectionTitle>
      <Timeline>
        {experience.map((exp, index) => (
          <TimelineItem key={`${exp.role}-${exp.period}`}>
            <Period>{exp.period}</Period>
            <Content>
              <Role>{exp.role}</Role>
              {exp.company && <Company>{exp.company}</Company>}
              <Description>{exp.description}</Description>
              <TechStack>
                {exp.technologies.map((tech) => (
                  <Tech key={tech}>{tech}</Tech>
                ))}
              </TechStack>
            </Content>
          </TimelineItem>
        ))}
      </Timeline>
    </ExperienceSection>
  );
};

const ExperienceSection = styled.section`
  padding: 5rem 0;
  background-color: ${({ theme }) => theme.backgroundSecondary};
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 3rem;
  text-align: center;
`;

const Timeline = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background-color: ${({ theme }) => theme.border};

    @media (max-width: 768px) {
      left: 20px;
    }
  }
`;

const TimelineItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
  position: relative;

  &:nth-child(even) {
    flex-direction: row-reverse;

    ${({ theme }) => `
      @media (min-width: 769px) {
        .Period {
          text-align: left;
        }
        .Content {
          text-align: right;
        }
      }
    `}
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding-left: 45px;
  }

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 15px;
    height: 15px;
    background-color: ${({ theme }) => theme.primary};
    border-radius: 50%;

    @media (max-width: 768px) {
      left: 13px;
    }
  }
`;

const Period = styled.div.attrs({ className: 'Period' })`
  width: 200px;
  padding: 0 2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  text-align: right;

  @media (max-width: 768px) {
    width: 100%;
    text-align: left;
    padding: 0;
    margin-bottom: 0.5rem;
  }
`;

const Content = styled.div.attrs({ className: 'Content' })`
  width: calc(50% - 100px);
  padding: 0 2rem;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`;

const Role = styled.h3`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.textSecondary};
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tech = styled.span`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.primary};
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.875rem;
  border: 1px solid ${({ theme }) => theme.border};
`;

const Company = styled.div`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 1rem;
  margin-bottom: 0.5rem;
  font-style: italic;
`;

export default Experience;
