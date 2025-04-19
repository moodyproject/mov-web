import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const ShowcaseSection = styled.section`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(
    circle at center,
    var(--color-surface) 0%,
    var(--color-background) 100%
  );

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
    opacity: 0.1;
    z-index: 1;
  }
`;

const ContentWrapper = styled.div`
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

const HeaderContainer = styled.div`
  text-align: center;
  position: relative;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding: 2rem 0;
`;

const Overline = styled(motion.span)`
  display: inline-block;
  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  color: var(--color-accent);
  margin-bottom: 1.5rem;
  padding: 0.75rem 1.5rem;
  background: var(--color-surface);
  border-radius: 100px;
  border: 1px solid var(--color-border);
`;

const Title = styled(motion.h2)`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  margin-bottom: 1.5rem;
  color: var(--color-text-primary);
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.2;
`;

const Description = styled(motion.p)`
  font-size: 1.25rem;
  color: var(--color-text-secondary);
  max-width: 640px;
  margin: 0 auto;
  line-height: 1.6;
`;

const SpecsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 0;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const SpecCard = styled(motion.div)`
  padding: 2rem;
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 0.5rem;
  height: 100%;
  min-height: 180px;
  aspect-ratio: 1.2;

  @media (max-width: 1024px) {
    min-height: 160px;
    aspect-ratio: auto;
  }

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(145, 71, 255, 0.3);
    background: rgba(0, 0, 0, 0.3);
  }
`;

const SpecValue = styled.div`
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  font-weight: 600;
  color: var(--color-accent);
  margin-bottom: 0.25rem;
  letter-spacing: -0.02em;
  font-family: "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif;
`;

const SpecLabel = styled.div`
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: var(--color-text-primary);
  font-weight: 500;
  margin-bottom: 0.5rem;
  letter-spacing: -0.01em;
`;

const SpecDescription = styled.div`
  font-size: clamp(0.8rem, 1.5vw, 0.9rem);
  color: var(--color-text-secondary);
  line-height: 1.4;
  opacity: 0.8;
  max-width: 200px;
  transition: all 0.3s ease;

  ${SpecCard}:hover & {
    color: var(--color-text-primary);
    opacity: 1;
  }
`;

const specs = [
  { 
    value: '±0.1mm', 
    label: 'Precision',
    description: 'Ultra-precise motion tracking for unparalleled accuracy in combat situations'
  },
  { 
    value: '72h+', 
    label: 'Battery Life',
    description: 'Extended operation time for prolonged missions without compromising performance'
  },
  { 
    value: '45g', 
    label: 'Ultra-Light',
    description: 'Aerospace-grade materials ensure minimal impact on mobility and agility'
  },
  { 
    value: '100m', 
    label: 'Range',
    description: 'Secure, encrypted communication with extended operational range'
  }
];

const ProductShowcase = () => {
  return (
    <ShowcaseSection>
      <ContentWrapper>
        <HeaderContainer>
          <Overline
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Product Specifications
          </Overline>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Advanced Features & Capabilities
          </Title>
          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Our motion tracking technology combines cutting-edge hardware with sophisticated software for unparalleled performance.
          </Description>
        </HeaderContainer>
        <SpecsGrid>
          {specs.map((spec, index) => (
            <SpecCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SpecValue>{spec.value}</SpecValue>
              <SpecLabel>{spec.label}</SpecLabel>
              <SpecDescription>{spec.description}</SpecDescription>
            </SpecCard>
          ))}
        </SpecsGrid>
      </ContentWrapper>
    </ShowcaseSection>
  );
};

export default ProductShowcase; 