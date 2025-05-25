import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Container, SectionBackground } from './ui';
import { PrimaryButton, SecondaryButton } from './ui/Button';
import { UniversalSection, UniversalContentWrapper, spacing } from '../styles/UniversalStyles';

const HeroContainer = styled(UniversalSection)`
  padding: 0;
  
  @media (max-width: 480px) {
    padding: ${spacing.sm} 0;
  }
`;

const ContentWrapper = styled(UniversalContentWrapper)`
  align-items: center;
  justify-content: center;
  height: 100%;
  
  @media (max-width: 768px) {
    padding: 0 ${spacing.md};
  }
  
  @media (max-width: 480px) {
    padding: 0 ${spacing.sm};
  }
`;

const HeroContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: ${spacing.lg} 0;
  position: relative;

  @media (max-width: 1024px) {
    text-align: center;
    gap: ${spacing.xl};
    padding: ${spacing.xl} 0;
  }
  
  @media (max-width: 768px) {
    padding: ${spacing.lg} 0;
    min-height: 85vh;
  }
  
  @media (max-width: 480px) {
    padding: ${spacing.md} 0;
    min-height: 80vh;
  }
`;

const TextContent = styled.div`
  max-width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${spacing.md};
  position: relative;

  @media (max-width: 1024px) {
    margin: 0 auto;
  }
  
  @media (max-width: 480px) {
    gap: ${spacing.sm};
    max-width: 100%;
  }
`;

const Overline = styled(motion.span)`
  display: inline-block;
  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.components.button.primary.background};
  margin-bottom: 1.5rem;
  padding: 0.75rem 1.5rem;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: 100px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  width: fit-content;
`;

const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 0;
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: -0.02em;
  white-space: nowrap;

  @media (max-width: 768px) {
    white-space: normal;
    font-size: clamp(1.8rem, 7vw, 2.8rem);
    line-height: 1.2;
  }

  @media (max-width: 480px) {
    font-size: clamp(1.6rem, 8vw, 2.2rem);
    white-space: normal;
    line-height: 1.2;
  }
  
  @media (max-width: 320px) {
    font-size: 1.6rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.25rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1.5rem;
  max-width: 540px;
  opacity: 0.9;

  @media (max-width: 1024px) {
    margin-left: auto;
    margin-right: auto;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 1rem;
    max-width: 100%;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;

  @media (max-width: 1024px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1rem;
    margin-top: 0.5rem;
  }
`;

const StyledPrimaryButton = styled(PrimaryButton)`
  /* Additional styling can be added if needed */
`;

const StyledSecondaryButton = styled(SecondaryButton)`
  /* Additional styling can be added if needed */
`;

const FloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
  
  @media (max-width: 480px) {
    display: none;
  }
`;

const FloatingElement = styled(motion.div)`
  position: absolute;
  width: 120px;
  height: 120px;
  background: ${({ theme }) => `rgba(${parseInt(theme.components.button.primary.background.slice(1, 3), 16)}, ${parseInt(theme.components.button.primary.background.slice(3, 5), 16)}, ${parseInt(theme.components.button.primary.background.slice(5, 7), 16)}, 0.05)`};
  border-radius: 24px;
  z-index: 2;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
`;

const HeroImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 100%;
  border-radius: 32px;
  filter: brightness(0.9) contrast(1.1);
  transition: all 0.3s ease;
  object-fit: contain;

  &:hover {
    transform: scale(1.02);
    filter: brightness(1) contrast(1.1);
  }
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <FloatingElements>
        <FloatingElement
          initial={{ x: -100, y: -100, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          style={{ top: '20%', left: '10%' }}
        />
        <FloatingElement
          initial={{ x: 100, y: -100, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          style={{ top: '40%', right: '10%' }}
        />
        <FloatingElement
          initial={{ x: -100, y: 100, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          style={{ bottom: '20%', left: '20%' }}
        />
      </FloatingElements>
      <ContentWrapper>
        <HeroContent>
          <TextContent>
            <Overline
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              Innovation in Motion
            </Overline>
            <Title
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.05 }}
            >
              Revolutionizing Military Training
            </Title>
            <Description
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              Our cutting-edge motion tracking technology provides real-time analytics and performance insights for military training and operations.
            </Description>
            <ButtonGroup
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.15 }}
            >
              <StyledPrimaryButton as={Link} to="/contact">Get Started</StyledPrimaryButton>
              <StyledSecondaryButton as={Link} to="/about">Learn More</StyledSecondaryButton>
            </ButtonGroup>
          </TextContent>
        </HeroContent>
      </ContentWrapper>
    </HeroContainer>
  );
};

export default HeroSection; 