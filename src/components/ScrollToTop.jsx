import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { IconButton } from './ui/Button';

const ScrollButton = styled(IconButton)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${({ theme }) => theme.components.button.primary.background};
  color: white;
  font-size: 1.5rem;
  box-shadow: ${({ theme }) => theme.shadows.soft};
  z-index: 100;

  &:hover {
    background: ${({ theme }) => theme.components.button.primary.hover};
  }

  @media (max-width: 768px) {
    bottom: 1rem;
    right: 1rem;
    width: 40px;
    height: 40px;
  }
`;

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <ScrollButton
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          size="large"
        >
          ↑
        </ScrollButton>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop; 