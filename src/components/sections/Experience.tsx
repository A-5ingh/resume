import styled from 'styled-components';
import { motion } from 'framer-motion';

const Experience = () => {
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
        <TimelineItem>
          <Period>2021 - Present</Period>
          <Content>
            <Role>Cloud & DevOps Architect</Role>
            <Description>
              Leading cloud migration initiatives and implementing DevOps best practices across multiple projects.
              Specializing in infrastructure as code, CI/CD automation, and cloud-native solutions.
            </Description>
            <TechStack>
              <Tech>Azure</Tech>
              <Tech>GCP</Tech>
              <Tech>GitHub Actions</Tech>
              <Tech>GitLab CI</Tech>
              <Tech>Infrastructure as Code</Tech>
            </TechStack>
          </Content>
        </TimelineItem>

        <TimelineItem>
          <Period>2016 - 2021</Period>
          <Content>
            <Role>Full Stack Developer</Role>
            <Description>
              Developed and maintained full-stack applications using MERN and MEAN stacks.
              Focused on building scalable and responsive web applications.
            </Description>
            <TechStack>
              <Tech>React</Tech>
              <Tech>Angular</Tech>
              <Tech>Node.js</Tech>
              <Tech>MongoDB</Tech>
              <Tech>Express</Tech>
            </TechStack>
          </Content>
        </TimelineItem>

        <TimelineItem>
          <Period>2009 - 2016</Period>
          <Content>
            <Role>QA Engineer / SDET</Role>
            <Description>
              Led automation testing initiatives and quality assurance processes.
              Developed robust test frameworks and implemented CI/CD testing pipelines.
            </Description>
            <TechStack>
              <Tech>Test Automation</Tech>
              <Tech>CI/CD</Tech>
              <Tech>Test Frameworks</Tech>
              <Tech>Quality Assurance</Tech>
            </TechStack>
          </Content>
        </TimelineItem>
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

export default Experience;
