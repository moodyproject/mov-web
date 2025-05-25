import React from 'react';
import styled from 'styled-components';
import { backgroundStyles } from '../ui';

const PageContainer = styled.div`
  ${backgroundStyles}
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: ${({ theme }) => `radial-gradient(
      circle at 50% 50%,
      ${theme.components.button.primary.background} 0%,
      transparent 70%
    )`};
    opacity: 0.05;
    pointer-events: none;
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(139, 92, 246, 0.05) 0%,
      transparent 100%
    );
    pointer-events: none;
    z-index: 1;
  }
`;

const PageWrapper = ({ children }) => {
  return (
    <PageContainer>
      {children}
    </PageContainer>
  );
};

export default PageWrapper; 