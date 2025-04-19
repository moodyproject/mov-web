import styled from 'styled-components';
import { motion } from 'framer-motion';

export const PageContainer = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => theme.colors.gradients.dark};
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => theme.colors.gradients.glow};
    z-index: 2;
  }
`;

export const Section = styled.section`
  position: relative;
  z-index: 3;
  padding: 6rem 2rem;
`;

export const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
`;

export const Card = styled(motion.div)`
  background: ${({ theme }) => theme.components.card.background};
  border: ${({ theme }) => theme.components.card.border};
  border-radius: ${({ theme }) => theme.radius.medium};
  transition: ${({ theme }) => theme.transitions.standard};
  backdrop-filter: blur(10px);

  &:hover {
    background: ${({ theme }) => theme.components.card.hover.background};
    border: ${({ theme }) => theme.components.card.hover.border};
    transform: translateY(-5px);
  }
`;

export const Button = styled(motion.button)`
  padding: 0.8rem 1.5rem;
  border-radius: ${({ theme }) => theme.radius.medium};
  font-weight: 600;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.standard};
  
  ${({ variant = 'primary', theme }) =>
    variant === 'primary'
      ? `
    background: ${theme.components.button.primary.background};
    color: ${theme.colors.text};
    border: none;
    
    &:hover {
      background: ${theme.components.button.primary.hover};
    }
    
    &:active {
      background: ${theme.components.button.primary.active};
    }
  `
      : `
    background: ${theme.components.button.secondary.background};
    color: ${theme.colors.text};
    border: ${theme.components.button.secondary.border};
    
    &:hover {
      background: ${theme.components.button.secondary.hover};
    }
  `}
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`; 