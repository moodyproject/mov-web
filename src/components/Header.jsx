import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import MobileMenu from './MobileMenu';

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: 80px;
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--color-border);
  transition: all 0.3s ease;
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 100%;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

const Logo = styled(Link)`
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-text-primary);
  letter-spacing: -0.03em;
  transition: all 0.3s ease;
  
  &:hover {
    color: var(--color-accent);
  }
`;

const MenuButton = styled(motion.button)`
  display: none;
  background: none;
  border: none;
  color: var(--color-text-primary);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-left: auto;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.div`
  position: relative;
`;

const NavLink = styled(Link)`
  color: var(--color-text-secondary);
  font-weight: 500;
  transition: all 0.3s ease;
  font-size: 1rem;
  padding: 0.5rem 0;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: var(--color-accent);
    transition: all 0.3s ease;
  }

  &:hover {
    color: var(--color-text-primary);
    
    &:after {
      width: 100%;
    }
  }
`;

const NavButton = styled.button`
  background: none;
  border: none;
  color: var(--color-text-secondary);
  font-size: 1rem;
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  font-weight: 500;

  &:hover {
    color: var(--color-text-primary);
  }

  &:after {
    content: '↓';
    font-size: 0.8em;
    transition: transform 0.3s ease;
  }

  &:hover:after {
    transform: translateY(2px);
  }
`;

const DropdownMenu = styled(motion.div)`
  position: absolute;
  top: calc(100% + 1rem);
  left: 50%;
  transform: translateX(-50%);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  padding: 1rem;
  min-width: 320px;
  display: grid;
  gap: 0.5rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
`;

const DropdownItem = styled(Link)`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  color: var(--color-text-primary);
  font-weight: 500;
  border-radius: 12px;
  transition: all 0.3s ease;
  
  span {
    color: var(--color-text-secondary);
    font-size: 0.9rem;
    margin-top: 0.25rem;
    font-weight: 400;
  }

  &:hover {
    background: var(--color-surface-raised);
    transform: translateX(4px);
  }
`;

const CTAButton = styled(motion.button)`
  background-color: var(--color-accent);
  color: white;
  border: none;
  padding: 0.875rem 2rem;
  border-radius: 100px;
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--color-accent-hover);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
  }
`;

const features = [
  { 
    name: 'Data Analytics', 
    path: '/data-analytics',
    description: 'Advanced performance metrics and real-time insights'
  },
  { 
    name: 'Training Programs', 
    path: '/training-programs',
    description: 'AI-powered training optimization'
  },
  { 
    name: 'Command Center', 
    path: '/command-center',
    description: 'Centralized monitoring and control'
  }
];

const Header = () => {
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Nav style={{ 
      boxShadow: isScrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none',
      height: isScrolled ? '70px' : '80px'
    }}>
      <NavContainer>
        <Logo to="/">mov</Logo>
        <NavLinks>
          <NavItem>
            <NavButton 
              onClick={() => {
                setIsFeaturesOpen(!isFeaturesOpen);
              }}
              onMouseEnter={() => setIsFeaturesOpen(true)}
              onMouseLeave={() => setIsFeaturesOpen(false)}
            >
              Features
            </NavButton>
            <AnimatePresence>
              {isFeaturesOpen && (
                <DropdownMenu
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  onMouseEnter={() => setIsFeaturesOpen(true)}
                  onMouseLeave={() => setIsFeaturesOpen(false)}
                >
                  {features.map((feature) => (
                    <DropdownItem key={feature.path} to={feature.path}>
                      {feature.name}
                      <span>{feature.description}</span>
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              )}
            </AnimatePresence>
          </NavItem>
          <NavItem>
            <NavLink to="/about">About</NavLink>
          </NavItem>
          <CTAButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '/contact'}
          >
            Get Started
          </CTAButton>
        </NavLinks>
        <MenuButton
          onClick={() => setIsMobileMenuOpen(true)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ☰
        </MenuButton>
      </NavContainer>
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)}
        features={features}
      />
    </Nav>
  );
};

export default Header; 