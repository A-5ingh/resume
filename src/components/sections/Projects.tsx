import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useProjects } from '../../context/ResumeContext';
import { useState } from 'react';
import type { Project } from '../../data/types';

const Projects = () => {
  const projects = useProjects();
  const [filter, setFilter] = useState<'All' | 'Open Source' | 'Industry'>('All');
  
  const filteredProjects = filter === 'All' 
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <ProjectsSection id="projects">
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Featured Projects
      </SectionTitle>
      <Categories>
        <CategoryButton active={filter === 'All'} onClick={() => setFilter('All')}>
          All
        </CategoryButton>
        <CategoryButton active={filter === 'Open Source'} onClick={() => setFilter('Open Source')}>
          Open Source
        </CategoryButton>
        <CategoryButton active={filter === 'Industry'} onClick={() => setFilter('Industry')}>
          Industry
        </CategoryButton>
      </Categories>
      <ProjectGrid>
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectCategory>{project.category}</ProjectCategory>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <TechStack>
              {project.tech.map((tech, techIndex) => (
                <Tech key={techIndex}>{tech}</Tech>
              ))}
            </TechStack>
            {project.link !== '#' && (
              <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
                View Project →
              </ProjectLink>
            )}
          </ProjectCard>
        ))}
      </ProjectGrid>
    </ProjectsSection>
  );
};

const ProjectsSection = styled.section`
  padding: 5rem 0;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 2rem;
  text-align: center;
`;

const Categories = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const CategoryButton = styled.button<{ active?: boolean }>`
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.border};
  background-color: ${({ theme, active }) => active ? theme.primary : 'transparent'};
  color: ${({ theme, active }) => active ? 'white' : theme.text};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme, active }) => active ? theme.primary : theme.backgroundSecondary};
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const ProjectCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.backgroundSecondary};
  border-radius: 10px;
  padding: 1.5rem;
  border: 1px solid ${({ theme }) => theme.border};
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 20px ${({ theme }) => theme.shadow};
  }
`;

const ProjectCategory = styled.span`
  color: ${({ theme }) => theme.primary};
  font-size: 0.875rem;
  font-weight: 500;
`;

const ProjectTitle = styled.h3`
  color: ${({ theme }) => theme.text};
  font-size: 1.25rem;
  margin: 0.5rem 0 1rem;
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 0.875rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const Tech = styled.span`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.primary};
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.75rem;
  border: 1px solid ${({ theme }) => theme.border};
`;

const ProjectLink = styled.a`
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  display: inline-block;
  margin-top: 0.5rem;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.text};
  }
`;

export default Projects;
