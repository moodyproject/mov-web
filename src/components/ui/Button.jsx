import styled from 'styled-components';
import { motion } from 'framer-motion';

// Base button styles with enhanced UX
const baseButtonStyles = `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: none;
  outline: none;
  cursor: pointer;
  font-family: inherit;
  font-weight: 600;
  text-decoration: none;
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: center;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.5s ease;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &:active {
    transform: scale(0.98);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    
    &:hover::before {
      left: -100%;
    }
  }
`;

// Primary button with enhanced effects
export const PrimaryButton = styled(motion.button)`
  ${baseButtonStyles}
  background: linear-gradient(135deg, ${({ theme }) => theme.components.button.primary.background} 0%, ${({ theme }) => theme.components.button.primary.hover} 100%);
  color: ${({ theme }) => theme.components.button.primary.text};
  padding: 0.875rem 2rem;
  font-size: 1rem;
  box-shadow: 0 4px 15px rgba(109, 40, 217, 0.3);
  
  &:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 8px 25px rgba(109, 40, 217, 0.4);
    background: linear-gradient(135deg, ${({ theme }) => theme.components.button.primary.hover} 0%, #8B5CF6 100%);
  }
  
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.components.button.primary.background};
    outline-offset: 2px;
  }
`;

// Secondary button with glass morphism effect
export const SecondaryButton = styled(motion.button)`
  ${baseButtonStyles}
  background: rgba(109, 40, 217, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(109, 40, 217, 0.2);
  color: ${({ theme }) => theme.colors.text};
  padding: 0.875rem 2rem;
  font-size: 1rem;
  
  &:hover {
    background: rgba(109, 40, 217, 0.2);
    border-color: rgba(109, 40, 217, 0.4);
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 8px 25px rgba(109, 40, 217, 0.2);
  }
`;

// Text button with subtle effects
export const TextButton = styled(motion.button)`
  ${baseButtonStyles}
  background: transparent;
  color: ${({ theme }) => theme.components.button.primary.background};
  padding: 0.5rem 1rem;
  font-weight: 500;
  border-radius: 8px;
  
  &:hover {
    background: rgba(109, 40, 217, 0.1);
    transform: translateX(4px);
  }
  
  &::before {
    display: none;
  }
`;

// Icon button with modern styling
export const IconButton = styled(motion.button)`
  ${baseButtonStyles}
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: ${({ theme }) => theme.colors.textSecondary};
  width: ${props => props.size === 'small' ? '2.5rem' : props.size === 'large' ? '3.5rem' : '3rem'};
  height: ${props => props.size === 'small' ? '2.5rem' : props.size === 'large' ? '3.5rem' : '3rem'};
  padding: 0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: rgba(109, 40, 217, 0.2);
    border-color: rgba(109, 40, 217, 0.4);
    color: ${({ theme }) => theme.colors.text};
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 8px 20px rgba(109, 40, 217, 0.3);
  }
`;

// Floating Action Button
export const FloatingButton = styled(motion.button)`
  ${baseButtonStyles}
  background: linear-gradient(135deg, ${({ theme }) => theme.components.button.primary.background} 0%, ${({ theme }) => theme.components.button.primary.hover} 100%);
  color: ${({ theme }) => theme.components.button.primary.text};
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  box-shadow: 0 8px 25px rgba(109, 40, 217, 0.4);
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 1000;
  
  &:hover {
    transform: translateY(-4px) scale(1.1);
    box-shadow: 0 12px 35px rgba(109, 40, 217, 0.5);
  }
  
  @media (max-width: 768px) {
    width: 3rem;
    height: 3rem;
    bottom: 1.5rem;
    right: 1.5rem;
  }
`;

// Button component that chooses the right variant
const Button = ({ variant = 'primary', children, ...props }) => {
  switch (variant) {
    case 'secondary':
      return <SecondaryButton {...props}>{children}</SecondaryButton>;
    case 'text':
      return <TextButton {...props}>{children}</TextButton>;
    case 'icon':
      return <IconButton {...props}>{children}</IconButton>;
    case 'floating':
      return <FloatingButton {...props}>{children}</FloatingButton>;
    default:
      return <PrimaryButton {...props}>{children}</PrimaryButton>;
  }
};

export default Button; 