import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const CategoryBadge = styled.span`
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background: ${({ theme }) => `rgba(${parseInt(theme.components.button.primary.background.slice(1, 3), 16)}, ${parseInt(theme.components.button.primary.background.slice(3, 5), 16)}, ${parseInt(theme.components.button.primary.background.slice(5, 7), 16)}, 0.1)`};
  border-radius: 100px;
  margin-bottom: ${props => props.noMargin ? '0' : '1.5rem'};
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.components.button.primary.background};
  text-align: center;
`;

export const Overline = styled.span`
  display: inline-block;
  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.components.button.primary.background};
  padding: 0.75rem 1.5rem;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: 100px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  margin-bottom: ${props => props.noMargin ? '0' : '1.5rem'};
`;

export const StatusBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 0.75rem;
  border-radius: 100px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  
  ${props => props.variant === 'success' && `
    background: rgba(109, 40, 217, 0.1);
    color: ${props.theme.components.button.primary.background};
  `}
  
  ${props => props.variant === 'warning' && `
    background: rgba(251, 191, 36, 0.1);
    color: #FBBF24;
  `}
  
  ${props => props.variant === 'error' && `
    background: rgba(248, 113, 113, 0.1);
    color: #F87171;
  `}
  
  ${props => props.variant === 'info' && `
    background: rgba(96, 165, 250, 0.1);
    color: #60A5FA;
  `}
`;

StatusBadge.propTypes = {
  variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']),
};

StatusBadge.defaultProps = {
  variant: 'success',
};

export default {
  CategoryBadge,
  Overline,
  StatusBadge,
}; 