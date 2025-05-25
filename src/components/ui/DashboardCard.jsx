import React from 'react';
import styled from 'styled-components';
import { UniversalCard, spacing } from '../../styles/UniversalStyles';

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${spacing.md};
`;

const CardTitle = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

const CardActions = styled.div`
  display: flex;
  gap: ${spacing.sm};
`;

const CardContent = styled.div`
  width: 100%;
  height: 100%;
`;

const DashboardCard = ({ 
  title, 
  children, 
  actions, 
  padding = spacing.md,
  className,
  ...props 
}) => {
  return (
    <UniversalCard padding={padding} className={className} {...props}>
      {title && (
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          {actions && <CardActions>{actions}</CardActions>}
        </CardHeader>
      )}
      <CardContent>
        {children}
      </CardContent>
    </UniversalCard>
  );
};

export default DashboardCard; 