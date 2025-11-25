import styled from 'styled-components';
import { useResume } from '../../context/ResumeContext';

const ResumePrintTemplate = () => {
    const { data } = useResume();
    const { personal, experience, projects, skills, certifications, social } = data;

    const cleanText = (text: string) => {
        return text.replace(/[🚀💻⭐️👨‍💻🐳🔄⚛️💚🎯🤖💾💰🔍📊🛠️🏗️⚡🛡️📚☁️🌟💪🐍🔌📐📝🔧⚙️]/g, '').trim();
    };

    return (
        <PrintContainer className="print-only">
            {/* Header */}
            <Header>
                <Name>{personal.name}</Name>
                <Role>{cleanText(personal.role)}</Role>
                <ContactInfo>
                    <span>{personal.email}</span>
                    <span> | </span>
                    <span>{personal.phone}</span>
                    <span> | </span>
                    <span>{social.find(s => s.platform === 'LinkedIn')?.url}</span>
                </ContactInfo>
            </Header>

            {/* Summary */}
            <Section>
                <SectionTitle>Professional Summary</SectionTitle>
                <Paragraph>{personal.summary}</Paragraph>
            </Section>

            {/* Experience */}
            <Section>
                <SectionTitle>Experience</SectionTitle>
                {experience.map((exp, index) => (
                    <Item key={index}>
                        <ItemHeader>
                            <ItemTitle>{cleanText(exp.role)}</ItemTitle>
                            <ItemDate>{exp.period}</ItemDate>
                        </ItemHeader>
                        <ItemSubtitle>{exp.company}</ItemSubtitle>
                        <Paragraph>{exp.description}</Paragraph>
                        <TechStack>Technologies: {exp.technologies.map(cleanText).join(', ')}</TechStack>
                    </Item>
                ))}
            </Section>

            {/* Projects */}
            <Section>
                <SectionTitle>Projects</SectionTitle>
                {projects.map((proj, index) => (
                    <Item key={index}>
                        <ItemTitle>{cleanText(proj.title)}</ItemTitle>
                        <Paragraph>{proj.description}</Paragraph>
                        <TechStack>Technologies: {proj.tech.map(cleanText).join(', ')}</TechStack>
                    </Item>
                ))}
            </Section>

            {/* Skills */}
            <Section>
                <SectionTitle>Skills</SectionTitle>
                {skills.map((skill, index) => (
                    <SkillItem key={index}>
                        <SkillCategory>{cleanText(skill.category)}:</SkillCategory>
                        <SkillList> {skill.items.map(cleanText).join(', ')}</SkillList>
                    </SkillItem>
                ))}
            </Section>

            {/* Certifications */}
            <Section>
                <SectionTitle>Certifications</SectionTitle>
                {certifications.map((cert, index) => (
                    <Item key={index}>
                        <ItemTitle>{cert.name}</ItemTitle>
                        <Paragraph>{cert.issuer} ({cert.date})</Paragraph>
                    </Item>
                ))}
            </Section>
        </PrintContainer>
    );
};

const PrintContainer = styled.div`
  display: none;
  background: white;
  color: black;
  font-family: 'Arial', sans-serif;
  padding: 20px;
  max-width: 100%;

  @media print {
    display: block;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const Name = styled.h1`
  font-size: 24pt;
  font-weight: bold;
  margin-bottom: 5px;
  color: black;
`;

const Role = styled.h2`
  font-size: 14pt;
  font-weight: bold;
  margin-bottom: 5px;
  color: black;
`;

const ContactInfo = styled.div`
  font-size: 10pt;
  color: black;
`;

const Section = styled.div`
  margin-bottom: 15px;
`;

const SectionTitle = styled.h3`
  font-size: 12pt;
  font-weight: bold;
  border-bottom: 1px solid black;
  margin-bottom: 10px;
  text-transform: uppercase;
  color: black;
`;

const Item = styled.div`
  margin-bottom: 10px;
  page-break-inside: avoid;
`;

const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const ItemTitle = styled.span`
  font-weight: bold;
  font-size: 11pt;
  color: black;
`;

const ItemDate = styled.span`
  font-weight: bold;
  font-size: 11pt;
  color: black;
`;

const ItemSubtitle = styled.div`
  font-style: italic;
  font-size: 11pt;
  margin-bottom: 2px;
  color: black;
`;

const Paragraph = styled.p`
  font-size: 10pt;
  line-height: 1.4;
  margin-bottom: 3px;
  color: black;
`;

const TechStack = styled.div`
  font-size: 10pt;
  font-style: italic;
  color: black;
`;

const SkillItem = styled.div`
  margin-bottom: 5px;
  font-size: 10pt;
  page-break-inside: avoid;
`;

const SkillCategory = styled.span`
  font-weight: bold;
  color: black;
`;

const SkillList = styled.span`
  color: black;
`;

export default ResumePrintTemplate;
