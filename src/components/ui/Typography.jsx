import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

// Base text styles
const baseTextStyles = css`
  margin: 0;
  padding: 0;
  
  ${props => props.center && css`
    text-align: center;
  `}
  
  ${props => props.muted && css`
    opacity: 0.8;
  `}
  
  ${props => props.margin && css`
    margin-bottom: ${typeof props.margin === 'string' ? props.margin : '1rem'};
  `}
  
  ${props => props.color && css`
    color: ${props.theme.colors[props.color] || props.color};
  `}
`;

// Heading Components
export const Heading1 = styled.h1`
  ${baseTextStyles}
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: -0.02em;
  line-height: 1.2;
  margin-bottom: ${props => props.noMargin ? '0' : '1.5rem'};
  font-family: var(--font-display);
`;

export const Heading2 = styled.h2`
  ${baseTextStyles}
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: -0.02em;
  line-height: 1.2;
  margin-bottom: ${props => props.noMargin ? '0' : '1.5rem'};
  font-family: var(--font-display);
`;

export const Heading3 = styled.h3`
  ${baseTextStyles}
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: -0.02em;
  line-height: 1.2;
  margin-bottom: ${props => props.noMargin ? '0' : '1rem'};
  font-family: var(--font-display);
`;

export const Heading4 = styled.h4`
  ${baseTextStyles}
  font-size: clamp(1.25rem, 2vw, 1.5rem);
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: -0.02em;
  line-height: 1.2;
  margin-bottom: ${props => props.noMargin ? '0' : '1rem'};
  font-family: var(--font-display);
`;

// Paragraph Component
export const Paragraph = styled.p`
  ${baseTextStyles}
  font-size: ${props => props.size === 'large' ? 'clamp(1.125rem, 1.5vw, 1.25rem)' : 
    props.size === 'small' ? '0.875rem' : 
    'clamp(1rem, 1.5vw, 1.125rem)'};
  color: ${({ theme, secondary }) => secondary ? theme.colors.textSecondary : theme.colors.text};
  line-height: 1.6;
  margin-bottom: ${props => props.noMargin ? '0' : '1rem'};
  max-width: ${props => props.maxWidth || 'none'};
  opacity: ${props => props.secondary ? '0.9' : '1'};
`;

Paragraph.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  secondary: PropTypes.bool,
  noMargin: PropTypes.bool,
  maxWidth: PropTypes.string,
};

Paragraph.defaultProps = {
  size: 'medium',
  secondary: true,
  noMargin: false,
};

// Lead Paragraph - for introductory text
export const LeadText = styled.p`
  ${baseTextStyles}
  font-size: clamp(1.125rem, 2vw, 1.25rem);
  line-height: 1.6;
  color: ${({ theme, color }) => color ? (theme.colors[color] || color) : theme.colors.textSecondary};
  margin-bottom: 2rem;
`;

// Text for captions, labels, etc.
export const SmallText = styled.span`
  ${baseTextStyles}
  font-size: 0.875rem;
  line-height: 1.4;
  color: ${({ theme, color }) => color ? (theme.colors[color] || color) : theme.colors.textTertiary};
`;

// Section Title with decorative element
export const SectionTitle = styled(Heading2)`
  position: relative;
  margin-bottom: ${props => props.margin || '2rem'};
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -0.5rem;
    width: 60px;
    height: 4px;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 2px;
    
    ${props => props.center && css`
      left: 50%;
      transform: translateX(-50%);
    `}
  }
`;

// Links
export const TextLink = styled.a`
  ${baseTextStyles}
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  transition: ${({ theme }) => theme.transitions.standard};
  cursor: pointer;
  
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    text-decoration: ${props => props.underline ? 'underline' : 'none'};
  }
`;

export const Caption = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.4;
  opacity: 0.8;
`;

export const GradientText = styled.span`
  background: linear-gradient(135deg, ${({ theme }) => theme.components.button.primary.background} 0%, ${({ theme }) => theme.colors.accent || '#A78BFA'} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
`;

export const MonoText = styled.code`
  font-family: var(--font-mono);
  font-size: 0.9em;
  background: ${({ theme }) => theme.colors.backgroundTertiary};
  padding: 0.2em 0.4em;
  border-radius: ${({ theme }) => theme.radius.small};
  color: ${({ theme }) => theme.components.button.primary.background};
`;

export default {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Paragraph,
  Caption,
  GradientText,
  MonoText
}; 