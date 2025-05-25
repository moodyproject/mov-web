import styled, { css } from 'styled-components';
import { universalTransparentStyles } from '../../styles/UniversalStyles';

// Standard background styles that can be reused across components
export const backgroundStyles = css`
  background: transparent;
  position: relative;
  overflow: hidden;
`;

// Standard background overlay
export const BackgroundOverlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  background: ${({ theme }) => theme.colors.gradients.enhancedGlow};
  opacity: 0.08;
  pointer-events: none;
`;

// Full page background container
export const PageBackground = styled.div`
  background: transparent;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  position: relative;
`;

// Section background container
export const SectionBackground = styled.div`
  ${backgroundStyles}
  width: 100%;
  position: relative;
  padding: 4rem 0;
  
  // Variation for alternate sections
  ${props => props.alternate && css`
    background: rgba(255, 255, 255, 0.02);
  `}
  
  // Variation for dashboard sections
  ${props => props.dashboard && css`
    background: rgba(255, 255, 255, 0.02);
  `}
`;

// Card-like container for content - now using universal styling
export const CardBackground = styled.div`
  ${universalTransparentStyles}
  padding: ${props => props.padding || '2rem'};
  
  &:hover {
    transform: translateY(-4px);
  }
`;

// Scrollable container with snap effect for home page
export const SnapScrollContainer = styled.div`
  width: 100%;
  overflow-y: auto;
  scroll-behavior: smooth;
  position: relative;
  background-color: ${({ theme }) => theme.colors.background};
  
  // Desktop: Enable snap scrolling with fixed height
  @media (min-width: 1024px) {
    height: 100vh;
    scroll-snap-type: y mandatory;
  }
  
  // Mobile: Normal scrolling with auto height
  @media (max-width: 1023px) {
    height: auto;
    min-height: 100vh;
  }
  
  // Hide scrollbars but keep functionality
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

// Full height section with snap effect
export const SnapSection = styled.section`
  ${backgroundStyles}
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0;
  margin: 0;
  
  // Desktop: Full height with snap
  @media (min-width: 1024px) {
    min-height: 100vh;
    height: 100vh;
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }
  
  // Mobile: Auto height, normal scrolling
  @media (max-width: 1023px) {
    min-height: 100vh;
    height: auto;
    scroll-snap-align: none;
  }
  
  // Variations
  ${props => props.tech && css`
    overflow: hidden;
  `}
  
  ${props => props.footer && css`
    @media (min-width: 1024px) {
      min-height: auto;
      height: auto;
      scroll-snap-align: end;
    }
    @media (max-width: 1023px) {
      min-height: auto;
      height: auto;
    }
    padding: 0;
  `}
`; 