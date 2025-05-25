import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { PrimaryButton } from '../ui/Button';

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
  background: ${({ $scrollProgress }) => 
    `rgba(10, 9, 15, ${0.3 + ($scrollProgress * 0.4)})`};
  backdrop-filter: blur(${({ $scrollProgress }) => 15 + ($scrollProgress * 10)}px);
  border-bottom: 1px solid ${({ $scrollProgress }) => 
    `rgba(109, 40, 217, ${0.1 + ($scrollProgress * 0.15)})`};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${({ $scrollProgress }) => 
    `0 4px 20px rgba(109, 40, 217, ${0.05 + ($scrollProgress * 0.1)})`};
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
      rgba(109, 40, 217, 0.05) 0%, 
      rgba(139, 92, 246, 0.02) 50%, 
      transparent 100%);
    opacity: ${({ $scrollProgress }) => $scrollProgress * 0.8};
    transition: opacity 0.3s ease;
  }
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 100%;
  position: relative;
  z-index: 10;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

const Logo = styled(Link)`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: -0.03em;
  transition: all 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.components.button.primary.background};
  }
`;

const MenuButton = styled(motion.button)`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
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
    gap: 0;
  }
`;

const NavItem = styled.div`
  position: relative;
  
  @media (max-width: 768px) {
    &.desktop-only {
      display: none;
    }
  }
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.textSecondary};
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
    background-color: ${({ theme }) => theme.components.button.primary.background};
    transition: all 0.3s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    
    &:after {
      width: 100%;
    }
  }
`;

const NavButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1rem;
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  font-weight: 500;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
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
  background: rgba(18, 17, 24, 0.8);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(109, 40, 217, 0.2);
  border-radius: 16px;
  padding: 1rem;
  min-width: 320px;
  display: grid;
  gap: 0.5rem;
  box-shadow: 0 10px 30px rgba(109, 40, 217, 0.15);
`;

const DropdownItem = styled(Link)`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  border-radius: 12px;
  transition: all 0.3s ease;
  background: rgba(109, 40, 217, 0.05);
  
  span {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 0.9rem;
    margin-top: 0.25rem;
    font-weight: 400;
  }

  &:hover {
    background: rgba(109, 40, 217, 0.15);
    transform: translateX(4px);
    box-shadow: 0 4px 15px rgba(109, 40, 217, 0.1);
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

const Header = ({ onMobileMenuOpen, scrollProgress = 0 }) => {
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerOpacity = 0.95 + (scrollProgress * 0.05);
  const headerBlur = 12 + (scrollProgress * 8);
  const purpleTint = scrollProgress * 0.03;

  return (
    <Nav $scrollProgress={scrollProgress}>
      <NavContainer>
        <Logo to="/">mov</Logo>
        <NavLinks>
          <NavItem className="desktop-only">
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
                  transition={{ duration: 0.15 }}
                  onMouseEnter={() => setIsFeaturesOpen(true)}
                  onMouseLeave={() => setIsFeaturesOpen(false)}
                >
                  {features.map(feature => (
                    <DropdownItem to={feature.path} key={feature.name}>
                      {feature.name}
                      <span>{feature.description}</span>
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              )}
            </AnimatePresence>
          </NavItem>
          <NavItem
            className="desktop-only"
          >
            <NavLink to="/about">About</NavLink>
          </NavItem>
          <NavItem
            className="desktop-only"
          >
            <NavLink to="/contact">Contact</NavLink>
          </NavItem>
          
          <MenuButton
            onClick={onMobileMenuOpen}
            whileTap={{ scale: 0.9 }}
            aria-label="Menu"
          >
            ☰
          </MenuButton>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Header; 