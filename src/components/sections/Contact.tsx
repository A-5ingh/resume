import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useSocial, useResume } from '../../context/ResumeContext';

const Contact = () => {
  const socialLinks = useSocial();
  const { data } = useResume();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      console.log('Form validation failed');
      return;
    }

    console.log('Form validation passed, attempting to open mailto');

    // Create email link
    const subject = `Message from ${formData.name}`;
    const body = `From: ${formData.email}\n\n${formData.message}`;
    const mailtoLink = `mailto:${data.personal.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    console.log('Mailto link:', mailtoLink);

    // Use anchor element to trigger mailto - most reliable method
    const link = document.createElement('a');
    link.href = mailtoLink;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    console.log('Mailto link triggered');

    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }, 500);
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
          onSubmit={handleSubmit}
        >
          <FormGroup>
            <Label>Name</Label>
            <Input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              hasError={!!errors.name}
            />
            {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
          </FormGroup>
          <FormGroup>
            <Label>Email</Label>
            <Input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              hasError={!!errors.email}
            />
            {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
          </FormGroup>
          <FormGroup>
            <Label>Message</Label>
            <TextArea
              name="message"
              placeholder="Your message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              hasError={!!errors.message}
            />
            {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
          </FormGroup>
          <SubmitButton type="submit">Send Message</SubmitButton>
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

const Input = styled.input<{ hasError?: boolean }>`
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: 2px solid ${({ theme, hasError }) => hasError ? '#ef4444' : theme.border};
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme, hasError }) => hasError ? '#ef4444' : theme.primary};
    box-shadow: 0 0 0 2px ${({ theme, hasError }) => hasError ? '#ef444433' : `${theme.primary}33`};
  }
`;

const TextArea = styled.textarea<{ hasError?: boolean }>`
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: 2px solid ${({ theme, hasError }) => hasError ? '#ef4444' : theme.border};
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  resize: vertical;
  min-height: 120px;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme, hasError }) => hasError ? '#ef4444' : theme.primary};
    box-shadow: 0 0 0 2px ${({ theme, hasError }) => hasError ? '#ef444433' : `${theme.primary}33`};
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

const ErrorMessage = styled.span`
  color: #ef4444;
  font-size: 0.85rem;
  margin-top: 0.25rem;
  font-weight: 500;
`;

export default Contact;
