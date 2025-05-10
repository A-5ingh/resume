import styled from 'styled-components';
import { motion } from 'framer-motion';
import { BsGithub, BsLinkedin, BsEnvelope, BsMedium } from 'react-icons/bs';
import { usePersonalInfo, useSocial } from '../../context/ResumeContext';

const Contact = () => {
  const { name, email } = usePersonalInfo();
  const socialLinks = useSocial();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BsGithub':
        return <BsGithub />;
      case 'BsLinkedin':
        return <BsLinkedin />;
      case 'BsEnvelope':
        return <BsEnvelope />;
      case 'BsMedium':
        return <BsMedium />;
      default:
        return null;
    }
  };
  return (
    <ContactSection id="contact">
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Get In Touch
      </SectionTitle>
      <ContentWrapper>
        <ContactInfo>
          <InfoText>
            I'm currently open to new opportunities and would love to hear from you.
            Whether you have a question or just want to say hi, feel free to reach out!
          </InfoText>
          <SocialLinks>
            {socialLinks.map((link) => (
              <SocialLink 
                key={link.platform}
                href={link.url}
                target={link.url.startsWith('mailto:') ? undefined : "_blank"}
                rel={link.url.startsWith('mailto:') ? undefined : "noopener noreferrer"}
              >
                {getIcon(link.icon)} {link.platform}
              </SocialLink>
            ))}
          </SocialLinks>
        </ContactInfo>
        <ContactForm
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <FormGroup>
            <Label>Name</Label>
            <Input type="text" placeholder="Your name" />
          </FormGroup>
          <FormGroup>
            <Label>Email</Label>
            <Input type="email" placeholder={email} />
          </FormGroup>
          <FormGroup>
            <Label>Message</Label>
            <TextArea placeholder="Your message" rows={5} />
          </FormGroup>
          <SubmitButton>Send Message</SubmitButton>
        </ContactForm>
      </ContentWrapper>
    </ContactSection>
  );
};

const ContactSection = styled.section`
  padding: 5rem 0;
  background-color: ${({ theme }) => theme.backgroundSecondary};
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 3rem;
  text-align: center;
`;

const ContentWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactInfo = styled.div``;

const InfoText = styled.p`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  svg {
    font-size: 1.3rem;
  }
`;

const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: ${({ theme }) => theme.text};
  font-size: 0.9rem;
  font-weight: 500;
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.border};
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
  }
`;

const TextArea = styled.textarea`
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.border};
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  resize: vertical;
  min-height: 120px;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
  }
`;

const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.primary};
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(46, 160, 67, 0.4);
  }
`;

export default Contact;
