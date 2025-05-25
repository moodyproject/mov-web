import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { backgroundStyles } from '../components/ui';
import { 
  UniversalFormContainer, 
  UniversalSection, 
  UniversalContentWrapper, 
  UniversalHeaderContainer 
} from '../styles/UniversalStyles';

const ShowcaseSection = styled(UniversalSection)`
  ${backgroundStyles}
  width: 100%;
  height: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentWrapper = styled(UniversalContentWrapper)`
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  gap: 2rem;
`;

const HeaderContainer = styled(UniversalHeaderContainer)`
  text-align: center;
  position: relative;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding: 2rem 0;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.2;
`;

const Description = styled(motion.p)`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 640px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ContactForm = styled(UniversalFormContainer)`
  max-width: 600px;
  
  &:hover {
    transform: translateY(-4px);
  }
`;

const FormGroup = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled(motion.label)`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1rem;
  font-weight: 500;
`;

const Input = styled(motion.input)`
  width: 100%;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.backgroundTertiary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.components.button.primary.background};
    background: ${({ theme }) => theme.colors.backgroundTertiary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

const TextArea = styled(motion.textarea)`
  width: 100%;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.backgroundTertiary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.components.button.primary.background};
    background: ${({ theme }) => theme.colors.backgroundTertiary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

const SubmitButton = styled(motion.button)`
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 12px;
  background: ${({ theme }) => theme.components.button.primary.background};
  color: ${({ theme }) => theme.components.button.primary.text};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.components.button.primary.hover};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.div`
  color: #ff4444;
  font-size: 0.9rem;
  margin-top: 0.25rem;
`;

const SuccessMessage = styled.div`
  color: #00C851;
  font-size: 1rem;
  text-align: center;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.backgroundTertiary};
  border-radius: 12px;
  margin-bottom: 1rem;
  border: 1px solid rgba(0, 200, 81, 0.3);
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.organization) newErrors.organization = 'Organization is required';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      // Here you would typically send the form data to your backend
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', organization: '', message: '' });
      setErrors({});
    } catch (error) {
      setErrors({ submit: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <ShowcaseSection>
      <ContentWrapper>
        <HeaderContainer>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Contact Us
          </SectionTitle>
          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Get in touch with our team to learn how mov can enhance your military training
          </Description>
        </HeaderContainer>

        <ContactForm
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {submitSuccess && (
            <SuccessMessage>
              Thank you for your message! We'll get back to you soon.
            </SuccessMessage>
          )}
          {errors.submit && <ErrorMessage>{errors.submit}</ErrorMessage>}
          
          <FormGroup>
            <Label>Name</Label>
            <Input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
          </FormGroup>
          
          <FormGroup>
            <Label>Email</Label>
            <Input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
          </FormGroup>
          
          <FormGroup>
            <Label>Organization</Label>
            <Input 
              type="text" 
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              required
            />
            {errors.organization && <ErrorMessage>{errors.organization}</ErrorMessage>}
          </FormGroup>
          
          <FormGroup>
            <Label>Message</Label>
            <TextArea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
          </FormGroup>
          
          <SubmitButton
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </SubmitButton>
        </ContactForm>
      </ContentWrapper>
    </ShowcaseSection>
  );
};

export default Contact;