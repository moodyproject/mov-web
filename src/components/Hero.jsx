import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  // Add your styles here
`;

const HeroContent = styled.div`
  // Add your styles here
`;

const HeroTitle = styled(motion.h1)`
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;

  span {
    color: ${({ theme }) => theme.colors.primary}; // This will use fern green (#60712F)
    display: block;
  }
`;

const CTAButton = styled(motion.button)`
  background: ${({ theme }) => theme.colors.primary}; // Fern green background
  color: ${({ theme }) => theme.colors.text};
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: ${({ theme }) => theme.radius.medium};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.standard};

  &:hover {
    background: ${({ theme }) => theme.colors.hover}; // Will use the hover state of fern green
    transform: translateY(-2px);
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <HeroTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span>Military-Grade</span> // This text will be fern green
          Motion Tracking
        </HeroTitle>
        {/* ... other hero content ... */}
        <CTAButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Schedule Demo
        </CTAButton>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero; 