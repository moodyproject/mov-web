import styled from 'styled-components';
import { motion } from 'framer-motion';
import { universalTransparentStyles } from '../../styles/UniversalStyles';

export const Card = styled(motion.div)`
  ${universalTransparentStyles}
  padding: ${props => props.padding || '2rem'};
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
  }
`; 