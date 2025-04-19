import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const MenuOverlay = styled(motion.div)`
  position: fixed;
  top: 80px; // Height of header
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.colors.background};
  z-index: 999;
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;

const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const MenuItem = styled(motion.div)`
  a {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
    font-size: 1.5rem;
    display: block;
    padding: 0.5rem 0;
  }
`;

const MobileButton = styled(motion.button)`
  margin-top: 2rem;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  cursor: pointer;
`;

const MenuSection = styled.div`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const menuVariants = {
  closed: {
    opacity: 0,
    y: "-100%",
    transition: {
      duration: 0.3,
      when: "afterChildren"
    }
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  closed: { opacity: 0, x: -20 },
  open: { opacity: 1, x: 0 }
};

const MobileMenu = ({ isOpen, onClose, features }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <MenuOverlay
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
        >
          <MenuList>
            <MenuItem variants={itemVariants}>
              <Link to="/" onClick={onClose}>Home</Link>
            </MenuItem>
            
            <MenuSection>Features</MenuSection>
            {features.map((feature) => (
              <MenuItem key={feature.path} variants={itemVariants}>
                <Link to={feature.path} onClick={onClose}>
                  {feature.name}
                  <span>{feature.description}</span>
                </Link>
              </MenuItem>
            ))}

            <MenuItem variants={itemVariants}>
              <Link to="/about" onClick={onClose}>About</Link>
            </MenuItem>
            <MenuItem variants={itemVariants}>
              <Link to="/contact" onClick={onClose}>Contact</Link>
            </MenuItem>
          </MenuList>
          <MobileButton
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule Demo
          </MobileButton>
        </MenuOverlay>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu; 