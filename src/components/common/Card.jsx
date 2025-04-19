import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  border-radius: ${({ theme }) => theme.radius.medium};
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: ${({ theme }) => theme.transitions.smooth};
  position: relative;
  overflow: hidden;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    transform: translateY(-5px);
    border-color: rgba(255, 255, 255, 0.2);
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
`; 