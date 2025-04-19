import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  position: relative;
  min-height: 100vh;
  background: radial-gradient(
    circle at center,
    var(--color-surface) 0%,
    var(--color-background) 100%
  );
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at 50% 50%,
      var(--color-accent) 0%,
      transparent 70%
    );
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