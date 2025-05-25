import styled from 'styled-components';

export const SectionContainer = styled.section`
  position: relative;
  padding: 6rem 2rem;
  min-height: 80vh;
  display: flex;
  align-items: center;
  
  // Add subtle background variation for visual separation
  &:nth-child(odd) {
    background: ${({ theme }) => `linear-gradient(
      170deg,
      ${theme.colors.background} 0%,
      ${theme.colors.backgroundAlt || 'rgba(255,255,255,0.02)'} 100%
    )`};
  }

  // Add modern geometric decorative elements
  &::before {
    content: '';
    position: absolute;
    width: 40%;
    height: 40%;
    right: -20%;
    top: 20%;
    background: ${({ theme }) => theme.colors.primary};
    opacity: 0.03;
    filter: blur(80px);
    border-radius: 50%;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
    min-height: auto;
  }
`;

export const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  position: relative;
  z-index: 2;
  
  // Add subtle reveal animation when scrolling
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease-out forwards;
  
  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

// Add shared heading styles for consistency
export const SectionHeading = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  margin-bottom: 2rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -0.5rem;
    width: 60px;
    height: 4px;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 2px;
  }
`;

// Add shared subheading styles
export const SectionSubheading = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 3rem;
  max-width: 600px;
  line-height: 1.6;
`;

// Add a container for card-based layouts
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  width: 100%;
`;

// Add shared card styles
export const Card = styled.div`
  background: ${({ theme }) => theme.colors.backgroundAlt || 'rgba(255,255,255,0.02)'};
  border-radius: ${({ theme }) => theme.radius.large};
  padding: 2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(255,255,255,0.05);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.primary};
  }
`;

// Add shared button styles
export const Button = styled.button`
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  border: none;
  border-radius: ${({ theme }) => theme.radius.medium};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
`; 