import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useSocial } from '../../context/ResumeContext';

const Contact = () => {
  const socialLinks = useSocial();

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
        <ContactInfo
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <InfoText>
            I'm not actively looking for new opportunities at the moment, but I'm always happy to connect and help if you need assistance or have any questions. Feel free to reach out!
          </InfoText>
          <SocialLinks>
            {socialLinks.map((link, index) => (
              <SocialLink
                key={link.platform}
                href={link.url}
                target={link.url.startsWith('mailto:') ? undefined : "_blank"}
                rel={link.url.startsWith('mailto:') ? undefined : "noopener noreferrer"}
                as={motion.a}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
              >
                <link.icon size={20} />
                {link.platform}
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
            <Input type="email" placeholder="Your email" />
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
  background-color: ${({ theme }) => theme.background};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      ${({ theme }) => theme.primary}33,
      transparent
    );
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 3rem;
  text-align: center;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 0 1rem;
  }
`;

const ContactInfo = styled(motion.div)`
  background: ${({ theme }) => theme.backgroundSecondary};
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px ${({ theme }) => theme.shadow};
  border: 1px solid ${({ theme }) => theme.border};
`;

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

const SocialLink = styled(motion.a)`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.2s ease;

  svg {
    color: ${({ theme }) => theme.primary};
  }

  &:hover {
    background: ${({ theme }) => `${theme.primary}11`};
    transform: translateX(5px);
  }
`;

const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background: ${({ theme }) => theme.backgroundSecondary};
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px ${({ theme }) => theme.shadow};
  border: 1px solid ${({ theme }) => theme.border};
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
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => `${theme.primary}33`};
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
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => `${theme.primary}33`};
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
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 
      0 8px 25px ${({ theme }) => `${theme.primary}66`},
      0 0 0 2px ${({ theme }) => theme.primary};
  }

  &:active {
    transform: translateY(0);
    box-shadow: 
      0 4px 12px ${({ theme }) => `${theme.primary}66`},
      0 0 0 2px ${({ theme }) => theme.primary};
  }
`;

export default Contact;
