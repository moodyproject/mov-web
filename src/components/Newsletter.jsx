import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { PrimaryButton } from './ui/Button';

const NewsletterSection = styled.section`
  background: linear-gradient(135deg, ${({ theme }) => theme.components.button.primary.background} 0%, ${({ theme }) => theme.components.button.primary.hover} 100%);
  padding: 6rem 2rem;
  color: white;
  text-align: center;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  margin-bottom: 1.5rem;
`;

const Description = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.9;
`;

const Form = styled.form`
  display: flex;
  gap: 1rem;
  max-width: 500px;
  margin: 0 auto;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  flex: 1;
  padding: 1rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.9);

  &:focus {
    outline: none;
    background: white;
  }
`;

const SubmitButton = styled(PrimaryButton)`
  padding: 1rem 2rem;
  border-radius: 4px;
  white-space: nowrap;
  background: ${({ theme }) => theme.colors.background}; // Dark background to contrast with newsletter section
  
  &:hover {
    background: ${({ theme }) => theme.colors.backgroundTertiary};
  }
`;

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <NewsletterSection>
      <Container>
        <Title>Stay Updated</Title>
        <Description>
          Subscribe to our newsletter for the latest updates on military training technology and performance optimization.
        </Description>
        <Form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <SubmitButton
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Subscribe
          </SubmitButton>
        </Form>
      </Container>
    </NewsletterSection>
  );
};

export default Newsletter; 