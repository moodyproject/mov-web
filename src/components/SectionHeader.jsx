import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeaderContainer = styled.div`
  text-align: center;
  margin-bottom: 6rem;
  position: relative;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 2rem;

  &::before {
    content: '';
    position: absolute;
    top: -100px;
    left: 50%;
    transform: translateX(-50%);
    width: 200px;
    height: 200px;
    background: radial-gradient(
      circle at center,
      var(--color-accent) 0%,
      transparent 70%
    );
    opacity: 0.05;
    filter: blur(40px);
    z-index: -1;
  }
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
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

  &:hover {
    border-color: var(--color-accent);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(139, 92, 246, 0.1);
  }
`;

const Title = styled(motion.h2)`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  margin-bottom: 1.5rem;
  color: var(--color-text-primary);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.2;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    font-size: clamp(2rem, 4vw, 2.5rem);
  }
`;

const Description = styled(motion.p)`
  font-size: 1.25rem;
  color: var(--color-text-secondary);
  max-width: 640px;
  margin: 0 auto;
  line-height: 1.6;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
`;

const SectionHeader = ({ subtitle, title, description }) => {
  return (
    <HeaderContainer>
      <Overline
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {subtitle}
      </Overline>
      <Title
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {title}
      </Title>
      <Description
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {description}
      </Description>
    </HeaderContainer>
  );
};

export default SectionHeader; 