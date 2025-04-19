import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ProductViewer3D from './ProductViewer3D';

const ShowcaseSection = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(to right, #1a1a1a, #2d2d2d);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const TextContent = styled.div`
  color: ${({ theme }) => theme.colors.text};
`;

const Title = styled(motion.h2)`
  font-size: clamp(2rem, 4vw, 3rem);
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  opacity: 0.9;
`;

const FeatureList = styled(motion.ul)`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    font-size: 1.1rem;

    &:before {
      content: "→";
      color: ${({ theme }) => theme.colors.primary};
      margin-right: 1rem;
    }
  }
`;

const ProductShowcase3D = () => {
  return (
    <ShowcaseSection>
      <Container>
        <Content>
          <TextContent>
            <Title
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Interactive Motion Tracking
            </Title>
            <Description
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Experience our cutting-edge motion tracking technology in 3D. 
              Rotate, zoom, and explore the detailed visualization of our 
              advanced tracking system.
            </Description>
            <FeatureList
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <li>Real-time motion capture</li>
              <li>360° movement analysis</li>
              <li>High-precision tracking</li>
              <li>Instant feedback system</li>
            </FeatureList>
          </TextContent>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <ProductViewer3D />
          </motion.div>
        </Content>
      </Container>
    </ShowcaseSection>
  );
};

export default ProductShowcase3D; 