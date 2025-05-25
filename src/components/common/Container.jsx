import styled from 'styled-components';

export const PageContainer = styled.div`
  background: ${({ theme }) => theme.colors.background};
  position: relative;
  overflow: hidden;

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

export const ContentWrapper = styled.div`
  position: relative;
  z-index: 3;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  padding: 6rem 2rem;
`; 