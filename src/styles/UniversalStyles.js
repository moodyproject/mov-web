import styled, { css } from 'styled-components';

// Universal spacing system
export const spacing = {
  xs: '0.5rem',    // 8px
  sm: '1rem',      // 16px
  md: '1.5rem',    // 24px
  lg: '2rem',      // 32px
  xl: '3rem',      // 48px
  xxl: '4rem',     // 64px
  xxxl: '6rem',    // 96px
};

// Universal breakpoints
export const breakpoints = {
  mobile: '640px',
  tablet: '1024px',
  desktop: '1440px',
};

// Universal transparent container styles
export const universalTransparentStyles = css`
  background: rgba(18, 17, 24, 0.4);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(109, 40, 217, 0.15);
  border-radius: 24px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(109, 40, 217, 0.08);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(109, 40, 217, 0.05) 0%, rgba(139, 92, 246, 0.02) 50%, transparent 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    background: rgba(18, 17, 24, 0.6);
    border-color: rgba(109, 40, 217, 0.25);
    box-shadow: 0 15px 35px rgba(109, 40, 217, 0.15);
    
    &::before {
      opacity: 1;
    }
  }
`;

// Completely transparent styles for product renders
export const universalFullyTransparentStyles = css`
  background: rgba(18, 17, 24, 0.1);
  border: 1px solid rgba(109, 40, 217, 0.08);
  border-radius: 24px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(109, 40, 217, 0.02) 0%, rgba(139, 92, 246, 0.01) 50%, transparent 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    background: rgba(18, 17, 24, 0.15);
    border-color: rgba(109, 40, 217, 0.15);
    
    &::before {
      opacity: 1;
    }
  }
`;

// Universal section container with consistent spacing
export const UniversalSection = styled.section`
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  padding: ${spacing.lg} 0;
  
  @media (max-width: ${breakpoints.tablet}) {
    min-height: auto;
    padding: ${spacing.xl} 0;
  }
  
  @media (max-width: ${breakpoints.mobile}) {
    padding: ${spacing.lg} 0;
  }
`;

// Universal content wrapper with consistent max-width and padding
export const UniversalContentWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  width: 100%;
  padding: 0 ${spacing.lg};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${spacing.xl};
  
  @media (max-width: ${breakpoints.tablet}) {
    padding: 0 ${spacing.md};
    gap: ${spacing.lg};
  }
  
  @media (max-width: ${breakpoints.mobile}) {
    padding: 0 ${spacing.sm};
    gap: ${spacing.md};
  }
`;

// Universal header container with consistent spacing
export const UniversalHeaderContainer = styled.div`
  text-align: center;
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: ${spacing.lg} 0;
  
  @media (max-width: ${breakpoints.tablet}) {
    padding: ${spacing.md} 0;
  }
  
  @media (max-width: ${breakpoints.mobile}) {
    padding: ${spacing.sm} 0;
  }
`;

// Universal card component
export const UniversalCard = styled.div`
  ${universalTransparentStyles}
  padding: ${props => props.padding || spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${props => props.gap || spacing.sm};
  height: ${props => props.height || 'auto'};
  
  ${props => props.center && css`
    align-items: center;
    justify-content: center;
    text-align: center;
  `}
  
  ${props => props.hover && css`
    &:hover {
      transform: translateY(-8px) scale(1.02);
    }
  `}
  
  @media (max-width: ${breakpoints.tablet}) {
    padding: ${spacing.md};
  }
  
  @media (max-width: ${breakpoints.mobile}) {
    padding: ${spacing.sm};
  }
`;

// Transparent card for product renders
export const UniversalTransparentCard = styled.div`
  ${universalFullyTransparentStyles}
  padding: ${props => props.padding || spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${props => props.gap || spacing.sm};
  height: ${props => props.height || 'auto'};
  
  ${props => props.center && css`
    align-items: center;
    justify-content: center;
    text-align: center;
  `}
  
  ${props => props.hover && css`
    &:hover {
      transform: translateY(-8px) scale(1.02);
    }
  `}
  
  @media (max-width: ${breakpoints.tablet}) {
    padding: ${spacing.md};
  }
  
  @media (max-width: ${breakpoints.mobile}) {
    padding: ${spacing.sm};
  }
`;

// Universal chart/graph container
export const UniversalChartContainer = styled.div`
  ${universalTransparentStyles}
  padding: ${spacing.lg};
  width: 100%;
  max-width: ${props => props.maxWidth || '1200px'};
  height: ${props => props.height || '500px'};
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: ${breakpoints.tablet}) {
    padding: ${spacing.md};
    height: 400px;
  }
  
  @media (max-width: ${breakpoints.mobile}) {
    padding: ${spacing.sm};
    height: 300px;
  }
`;

// Universal form container
export const UniversalFormContainer = styled.form`
  ${universalTransparentStyles}
  padding: ${spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${spacing.md};
  max-width: ${props => props.maxWidth || '600px'};
  margin: 0 auto;
  width: 100%;
  
  &:hover {
    transform: translateY(-4px);
  }
  
  @media (max-width: ${breakpoints.tablet}) {
    padding: ${spacing.md};
    gap: ${spacing.sm};
  }
  
  @media (max-width: ${breakpoints.mobile}) {
    padding: ${spacing.sm};
  }
`;

// Universal viewer container (for 3D models, etc.)
export const UniversalViewerContainer = styled.div`
  ${universalFullyTransparentStyles}
  padding: ${spacing.md};
  width: 100%;
  flex: 1;
  min-height: ${props => props.minHeight || '300px'};
  display: flex;
  align-items: center;
  justify-content: center;
  
  & > div {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 2;
  }

  & canvas {
    width: 100% !important;
    height: 100% !important;
    object-fit: contain;
    border-radius: 16px;
    background: transparent !important;
  }
  
  @media (max-width: ${breakpoints.tablet}) {
    padding: ${spacing.sm};
    min-height: 250px;
  }
  
  @media (max-width: ${breakpoints.mobile}) {
    min-height: 200px;
  }
`;

// Universal grid container
export const UniversalGrid = styled.div`
  display: grid;
  grid-template-columns: ${props => props.columns || 'repeat(auto-fit, minmax(280px, 1fr))'};
  gap: ${props => props.gap || spacing.lg};
  width: 100%;
  max-width: ${props => props.maxWidth || '1200px'};
  margin: 0 auto;
  padding: ${props => props.padding || `${spacing.lg} 0`};
  
  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: ${props => props.tabletColumns || 'repeat(2, 1fr)'};
    gap: ${spacing.md};
    padding: ${spacing.md} 0;
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: ${props => props.mobileColumns || '1fr'};
    gap: ${spacing.sm};
    padding: ${spacing.sm} 0;
  }
`;

// Universal metric/spec card
export const UniversalMetricCard = styled.div`
  ${universalTransparentStyles}
  padding: ${spacing.md};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: ${spacing.xs};
  height: 100%;
  min-height: ${props => props.minHeight || '140px'};
  
  @media (max-width: ${breakpoints.tablet}) {
    min-height: 160px;
    padding: ${spacing.lg};
  }
  
  @media (max-width: ${breakpoints.mobile}) {
    padding: ${spacing.md};
    min-height: 120px;
  }
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
  }
`;

// Universal feature card
export const UniversalFeatureCard = styled.div`
  ${universalTransparentStyles}
  padding: ${spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${spacing.sm};
  height: 100%;
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
  }
  
  @media (max-width: ${breakpoints.tablet}) {
    padding: ${spacing.md};
  }
  
  @media (max-width: ${breakpoints.mobile}) {
    padding: ${spacing.sm};
  }
`;

// Universal testimonial card
export const UniversalTestimonialCard = styled.div`
  ${universalTransparentStyles}
  padding: ${spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${spacing.md};
  height: 100%;
  
  @media (max-width: ${breakpoints.tablet}) {
    padding: ${spacing.md};
  }
  
  @media (max-width: ${breakpoints.mobile}) {
    padding: ${spacing.sm};
  }
`;

// Universal mission/about card
export const UniversalMissionCard = styled.div`
  ${universalTransparentStyles}
  padding: ${spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${spacing.sm};
  
  &:hover {
    transform: translateY(-4px);
  }
  
  @media (max-width: ${breakpoints.tablet}) {
    padding: ${spacing.md};
  }
  
  @media (max-width: ${breakpoints.mobile}) {
    padding: ${spacing.sm};
  }
`; 