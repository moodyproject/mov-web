import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const MenuOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10000;
  backdrop-filter: blur(4px);
`;

const MenuSidebar = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 320px;
  max-width: 80vw;
  background: ${({ theme }) => theme.colors.background};
  z-index: 10001;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => theme.components.globalBackground.gradient};
    opacity: ${({ theme }) => theme.components.globalBackground.opacity};
    z-index: -1;
    pointer-events: none;
    background-size: 200% 200%;
    animation: gradientShift 45s ease infinite;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => theme.colors.gradients.subtleGlow};
    z-index: -1;
    pointer-events: none;
    opacity: 0.2;
  }
`;

const MenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: -0.03em;
`;

const CloseButton = styled(motion.button)`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({ theme }) => theme.colors.backgroundSecondary};
  }
`;

const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
`;

const MenuItem = styled(motion.div)`
  a {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: 500;
    display: block;
    padding: 1rem;
    border-radius: 12px;
    transition: all 0.3s ease;
    
    &:hover {
      background: ${({ theme }) => theme.colors.backgroundSecondary};
      color: ${({ theme }) => theme.components.button.primary.background};
      transform: translateX(-4px);
    }
  }
`;

const MenuSection = styled.div`
  font-weight: 600;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.components.button.primary.background};
  margin: 1.5rem 0 0.5rem 1rem;
  
  &:first-child {
    margin-top: 0;
  }
`;

const overlayVariants = {
  closed: {
    opacity: 0,
    transition: {
      duration: 0.3
    }
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.3
    }
  }
};

const sidebarVariants = {
  closed: {
    x: "100%",
    transition: {
      duration: 0.3,
      when: "afterChildren"
    }
  },
  open: {
    x: 0,
    transition: {
      duration: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.05
    }
  }
};

const itemVariants = {
  closed: { opacity: 0, x: -20 },
  open: { opacity: 1, x: 0 }
};

const MobileMenu = ({ closeMenu, features }) => {
  return (
    <AnimatePresence>
      <MenuOverlay
        initial="closed"
        animate="open"
        exit="closed"
        variants={overlayVariants}
        onClick={closeMenu}
      />
      <MenuSidebar
        initial="closed"
        animate="open"
        exit="closed"
        variants={sidebarVariants}
        onClick={(e) => e.stopPropagation()}
      >
        <MenuHeader>
          <Logo>mov</Logo>
          <CloseButton
            onClick={closeMenu}
            whileTap={{ scale: 0.9 }}
            aria-label="Close menu"
          >
            ✕
          </CloseButton>
        </MenuHeader>

        <MenuList>
          <MenuItem variants={itemVariants}>
            <Link to="/" onClick={closeMenu}>Home</Link>
          </MenuItem>
          
          <MenuSection>Features</MenuSection>
          {features.map((feature) => (
            <MenuItem key={feature.path} variants={itemVariants}>
              <Link to={feature.path} onClick={closeMenu}>
                {feature.name}
              </Link>
            </MenuItem>
          ))}

          <MenuSection>Navigation</MenuSection>
          <MenuItem variants={itemVariants}>
            <Link to="/about" onClick={closeMenu}>About</Link>
          </MenuItem>
          <MenuItem variants={itemVariants}>
            <Link to="/contact" onClick={closeMenu}>Contact</Link>
          </MenuItem>
        </MenuList>
      </MenuSidebar>
    </AnimatePresence>
  );
};

export default MobileMenu; 