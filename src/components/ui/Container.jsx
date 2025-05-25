import styled from 'styled-components';

// Standard content container with maximum width and centered
export const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

// Container with vertical padding for sections
export const SectionContainer = styled(Container)`
  padding-top: 6rem;
  padding-bottom: 6rem;
  
  @media (max-width: 768px) {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
`;

// Full-height page container
export const PageContainer = styled.div`
  background: ${({ theme }) => theme.colors.background};
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => `radial-gradient(
      circle at 50% 30%,
      ${theme.components.button.primary.background} 0%,
      transparent 80%
    )`};
    opacity: 0.04;
    z-index: 1;
  }
`;

// Content wrapper inside page container
export const ContentWrapper = styled.div`
  position: relative;
  z-index: 3;
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

// Grid container with responsive columns
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.columns || 'auto-fit'}, minmax(${props => props.minWidth || '280px'}, 1fr));
  gap: ${props => props.gap || '2rem'};
  width: 100%;
`;

// Flex container with common alignment options
export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  align-items: ${props => props.alignItems || 'center'};
  justify-content: ${props => props.justifyContent || 'flex-start'};
  gap: ${props => props.gap || '1rem'};
  flex-wrap: ${props => props.wrap || 'nowrap'};
  width: 100%;
`; 