import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useProjects } from '../../context/ResumeContext';
import { useState } from 'react';
import { GlassCard } from '../shared/GlassCard';
import { GradientText } from '../shared/GradientText';
import { ExternalLink, Folder } from 'lucide-react';

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
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <GradientText>Featured Projects</GradientText>
      </SectionTitle>

      <Categories>
        {['All', 'Open Source', 'Industry'].map((cat) => (
          <CategoryButton
            key={cat}
            active={filter === cat}
            onClick={() => setFilter(cat as any)}
          >
            {cat}
          </CategoryButton>
        ))}
      </Categories>

      <BentoGrid>
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            as={motion.div}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={index % 3 === 0 ? 'wide' : ''}
          >
            <CardHeader>
              <CategoryTag>{project.category}</CategoryTag>
              <IconWrapper>
                <Folder size={20} />
              </IconWrapper>
            </CardHeader>

            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>

            <Footer>
              <TechStack>
                {project.tech.slice(0, 4).map((tech, techIndex) => (
                  <Tech key={techIndex}>{tech}</Tech>
                ))}
                {project.tech.length > 4 && <Tech>+{project.tech.length - 4}</Tech>}
              </TechStack>

              {project.link && project.link !== '#' && (
                <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={18} />
                </ProjectLink>
              )}
            </Footer>
          </ProjectCard>
        ))}
      </BentoGrid>
    </ProjectsSection>
  );
};

const ProjectsSection = styled.section`
  padding: 6rem 2rem;
  background: ${({ theme }) => theme.backgroundSecondary};
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 3rem;
`;

const Categories = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 4rem;
  flex-wrap: wrap;
`;

const CategoryButton = styled.button<{ active?: boolean }>`
  padding: 0.75rem 2rem;
  border-radius: 50px;
  border: 1px solid ${({ theme, active }) => active ? theme.primary : theme.border};
  background: ${({ theme, active }) => active ? theme.primary : 'transparent'};
  color: ${({ theme, active }) => active ? 'white' : theme.text};
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;

  &:hover {
    transform: translateY(-2px);
    background: ${({ theme, active }) => active ? theme.primary : theme.border};
  }
`;

const BentoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    
    .wide {
      grid-column: span 2;
    }
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(GlassCard)`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.border};
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
`;

const CategoryTag = styled.span`
  color: ${({ theme }) => theme.primary};
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const IconWrapper = styled.div`
  color: ${({ theme }) => theme.textSecondary};
`;

const ProjectTitle = styled.h3`
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  flex-grow: 1;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: auto;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tech = styled.span`
  background: ${({ theme }) => theme.backgroundSecondary};
  color: ${({ theme }) => theme.textSecondary};
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.8rem;
  border: 1px solid ${({ theme }) => theme.border};
`;

const ProjectLink = styled.a`
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ theme }) => theme.backgroundSecondary};
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: white;
    transform: rotate(45deg);
  }
`;

export default Projects;
