import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroContainer = styled.section`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(
    circle at center,
    var(--color-surface) 0%,
    var(--color-background) 100%
  );
  overflow: hidden;
  padding: 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at 50% 50%,
      var(--color-accent) 0%,
      transparent 70%
    );
    opacity: 0.05;
    z-index: 1;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 3rem;
`;

const HeroContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 2rem 0;
  position: relative;

  @media (max-width: 1024px) {
    text-align: center;
    gap: 3rem;
    padding: 3rem 0;
  }
`;

const TextContent = styled.div`
  max-width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
  position: relative;

  @media (max-width: 1024px) {
    margin: 0 auto;
  }
`;

const Overline = styled(motion.span)`
  display: inline-block;
  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  color: var(--color-accent);
  margin-bottom: 0;
  padding: 0.75rem 1.5rem;
  background: var(--color-surface);
  border-radius: 100px;
  border: 1px solid var(--color-border);
  width: fit-content;

  @media (max-width: 1024px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 0;
  color: var(--color-text-primary);
  letter-spacing: -0.02em;
  white-space: nowrap;

  @media (max-width: 480px) {
    font-size: 2.5rem;
    white-space: normal;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.25rem;
  line-height: 1.6;
  color: var(--color-text-secondary);
  margin-bottom: 1.5rem;
  max-width: 540px;
  opacity: 0.9;

  @media (max-width: 1024px) {
    margin-left: auto;
    margin-right: auto;
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
  }
`;

const PrimaryButton = styled(motion(Link))`
  padding: 1rem 2.5rem;
  background: var(--color-accent);
  color: white;
  border-radius: 100px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  border: none;
  font-size: 1.125rem;

  &:hover {
    background: var(--color-accent-hover);
    transform: translateY(-2px);
  }
`;

const SecondaryButton = styled(motion(Link))`
  padding: 1rem 2.5rem;
  background: transparent;
  color: var(--color-text-primary);
  border-radius: 100px;
  font-weight: 500;
  text-decoration: none;
  border: 1px solid var(--color-border);
  transition: all 0.3s ease;
  font-size: 1.125rem;

  &:hover {
    border-color: var(--color-accent);
    color: var(--color-accent);
    transform: translateY(-2px);
  }
`;

const FloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
`;

const FloatingElement = styled(motion.div)`
  position: absolute;
  width: 120px;
  height: 120px;
  background: var(--color-surface);
  border-radius: 24px;
  border: 1px solid var(--color-border);
  z-index: 2;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
`;

const HeroImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 100%;
  border-radius: 32px;
  border: 1px solid var(--color-border);
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
          transition={{ duration: 1, delay: 0.5 }}
          style={{ top: '20%', left: '10%' }}
        />
        <FloatingElement
          initial={{ x: 100, y: -100, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          style={{ top: '40%', right: '10%' }}
        />
        <FloatingElement
          initial={{ x: -100, y: 100, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          style={{ bottom: '20%', left: '20%' }}
        />
      </FloatingElements>
      <ContentWrapper>
        <HeroContent>
          <TextContent>
            <Overline
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Innovation in Motion
            </Overline>
            <Title
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Revolutionizing Military Training
            </Title>
            <Description
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our cutting-edge motion tracking technology provides real-time analytics and performance insights for military training and operations.
            </Description>
            <ButtonGroup
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <PrimaryButton to="/contact">Get Started</PrimaryButton>
              <SecondaryButton to="/about">Learn More</SecondaryButton>
            </ButtonGroup>
          </TextContent>
        </HeroContent>
      </ContentWrapper>
    </HeroContainer>
  );
};

export default HeroSection; 