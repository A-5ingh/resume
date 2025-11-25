import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useSkills } from '../../context/ResumeContext';
import { GlassCard } from '../shared/GlassCard';
import { GradientText } from '../shared/GradientText';
import { Code2, Database, Layout, Terminal, Cpu, Globe } from 'lucide-react';

const getIconForCategory = (category: string) => {
  switch (category.toLowerCase()) {
    case 'frontend': return <Layout size={24} />;
    case 'backend': return <Database size={24} />;
    case 'languages': return <Code2 size={24} />;
    case 'tools': return <Terminal size={24} />;
    case 'devops': return <Cpu size={24} />;
    default: return <Globe size={24} />;
  }
};

const Skills = () => {
  const skills = useSkills();

  return (
    <SkillsSection id="skills">
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <GradientText>Skills & Technologies</GradientText>
      </SectionTitle>

      <SkillsGrid>
        {skills.map((category, categoryIndex) => (
          <SkillCard
            key={category.category}
            as={motion.div}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: categoryIndex * 0.1,
            }}
          >
            <CategoryHeader>
              <IconWrapper>
                {getIconForCategory(category.category)}
              </IconWrapper>
              <CategoryTitle>{category.category}</CategoryTitle>
            </CategoryHeader>

            <SkillsList>
              {category.items.map((skill, skillIndex) => (
                <SkillItem
                  key={skill}
                  as={motion.div}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  {skill}
                </SkillItem>
              ))}
            </SkillsList>
          </SkillCard>
        ))}
      </SkillsGrid>
    </SkillsSection>
  );
};

const SkillsSection = styled.section`
  padding: 6rem 2rem;
  background: ${({ theme }) => theme.background};
  position: relative;
  overflow: hidden;
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: 3rem;
  margin-bottom: 4rem;
`;

const SkillsGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const SkillCard = styled(GlassCard)`
  height: 100%;
  background: ${({ theme }) => theme.backgroundSecondary};
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: ${({ theme }) => theme.primary}20;
  color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
  font-weight: 600;
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const SkillItem = styled.div`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.textSecondary};
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  border: 1px solid ${({ theme }) => theme.border};
  cursor: default;
  font-weight: 500;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: white;
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 4px 12px ${({ theme }) => theme.primary}40;
  }
`;

export default Skills;
