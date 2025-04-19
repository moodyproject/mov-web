import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import PageContainer from '../components/common/PageContainer';
import PageHero from '../components/PageHero';

const ContactContainer = styled.div`
  color: var(--color-text-primary);
  min-height: 100vh;
  position: relative;
  z-index: 1;
`;

const ContactSection = styled.section`
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`;

const ContactForm = styled(motion.form)`
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 600px;
  margin: 0 auto;
  backdrop-filter: blur(10px);

  &:hover {
    border-color: var(--color-accent);
  }
`;

const FormGroup = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled(motion.label)`
  color: var(--color-text-secondary);
  font-size: 1rem;
  font-weight: 500;
`;

const Input = styled(motion.input)`
  width: 100%;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: var(--color-text-primary);
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--color-accent);
    background: rgba(0, 0, 0, 0.3);
  }

  &::placeholder {
    color: var(--color-text-secondary);
  }
`;

const TextArea = styled(motion.textarea)`
  width: 100%;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: var(--color-text-primary);
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--color-accent);
    background: rgba(0, 0, 0, 0.3);
  }

  &::placeholder {
    color: var(--color-text-secondary);
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 1rem 2rem;
  background: var(--color-accent);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: var(--color-accent-hover, var(--color-accent));
  }

  &:active {
    transform: translateY(0);
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
  background: rgba(0, 0, 0, 0.2);
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
    <PageContainer>
      <ContactContainer>
        <PageHero 
          title="Contact Us"
          subtitle="Get in touch with our team to learn how mov can enhance your military training"
        />

        <ContactSection>
          <ContactForm
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
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
        </ContactSection>
      </ContactContainer>
    </PageContainer>
  );
};

export default Contact;