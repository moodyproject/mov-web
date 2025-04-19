import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled(motion.section)`
  padding: 6rem 2rem;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const scrollVariants = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const ScrollSection = ({ children, background }) => {
  return (
    <Section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={scrollVariants}
      style={{ background }}
    >
      <Container>{children}</Container>
    </Section>
  );
};

export default ScrollSection; 