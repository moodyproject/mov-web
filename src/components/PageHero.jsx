import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 2rem 2rem;
  z-index: 2;
`;

const HeroContent = styled.div`
  text-align: center;
  width: 90%;
  max-width: 1200px;
  position: relative;
  z-index: 2;
`;

const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  margin-bottom: 1.5rem;
  font-weight: 700;
  color: var(--color-text-primary);
`;

const Subtitle = styled(motion.p)`
  font-size: clamp(1rem, 2vw, 1.25rem);
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  color: var(--color-text-secondary);
`;

const PageHero = ({ title, subtitle }) => {
  return (
    <HeroSection>
      <HeroContent>
        <Title
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {title}
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {subtitle}
        </Subtitle>
      </HeroContent>
    </HeroSection>
  );
};

export default PageHero; 