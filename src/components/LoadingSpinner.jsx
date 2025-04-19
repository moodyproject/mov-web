import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SpinnerContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const Spinner = styled(motion.div)`
  width: 50px;
  height: 50px;
  border: 3px solid ${({ theme }) => theme.colors.primary};
  border-top: 3px solid transparent;
  border-radius: 50%;
`;

const LoadingText = styled(motion.p)`
  color: ${({ theme }) => theme.colors.text};
  margin-top: 1rem;
  font-size: 1.2rem;
`;

const LoadingSpinner = () => {
  return (
    <SpinnerContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>
        <Spinner
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <LoadingText
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Loading...
        </LoadingText>
      </div>
    </SpinnerContainer>
  );
};

export default LoadingSpinner; 