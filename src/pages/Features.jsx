import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FeaturesContainer = styled.div`
  color: ${({ theme }) => theme.colors.text};
`;

const HeroSection = styled.section`
  padding: 8rem 2rem 4rem;
  background: linear-gradient(to right, #1a1a1a, #2d2d2d);
  text-align: center;
`;

const MainContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  margin-bottom: 2rem;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto 3rem;
  line-height: 1.6;
`;

const FeatureSection = styled.section`
  padding: 6rem 2rem;
  background-color: ${({ theme }) => theme.colors.background};

  &:nth-child(odd) {
    background: linear-gradient(to right, #1a1a1a, #2d2d2d);
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  &:nth-child(even) {
    direction: rtl;
    
    > * {
      direction: ltr;
    }
  }
`;

const FeatureContent = styled.div`
  h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  p {
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    
    &:before {
      content: '✓';
      color: ${({ theme }) => theme.colors.primary};
      margin-right: 1rem;
    }
  }
`;

const ImageWrapper = styled(motion.div)`
  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
`;

const features = [
  {
    title: "Advanced Sensor Fusion",
    description: "mov integrates traditional motion sensors with capacitive sensors that detect subtle electrical signals from the body. This dual-sensing technology captures everything from explosive drills to slight shifts in balance.",
    image: "/images/sensor-fusion.jpg",
    benefits: [
      "Precise movement tracking",
      "Real-time data processing",
      "Comprehensive performance metrics"
    ]
  },
  {
    title: "Rugged Field-Ready Design",
    description: "Built from MIL-SPEC materials, mov's wearables are designed to endure extreme temperatures, water, dust, and impact. Whether in training or active deployment, mov delivers reliable performance.",
    image: "/images/rugged-design.jpg",
    benefits: [
      "MIL-STD-810G certified",
      "Waterproof and dustproof",
      "Impact resistant"
    ]
  },
  {
    title: "Data Analytics Platform",
    description: "mov transforms raw data into actionable intelligence. Our algorithms analyze repetitions, balance, posture, fatigue, and more, highlighting gaps in performance and early signs of injury risk.",
    image: "/images/analytics.jpg",
    benefits: [
      "AI-powered insights",
      "Predictive analytics",
      "Customizable dashboards"
    ]
  }
];

const Features = () => {
  return (
    <FeaturesContainer>
      <HeroSection>
        <MainContent>
          <Title
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Features
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Advanced technology engineered for military excellence
          </Subtitle>
        </MainContent>
      </HeroSection>

      {features.map((feature, index) => (
        <FeatureSection key={feature.title}>
          <FeatureGrid>
            <FeatureContent>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2>{feature.title}</h2>
                <p>{feature.description}</p>
                <ul>
                  {feature.benefits.map((benefit) => (
                    <li key={benefit}>{benefit}</li>
                  ))}
                </ul>
              </motion.div>
            </FeatureContent>
            <ImageWrapper
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img src={feature.image} alt={feature.title} />
            </ImageWrapper>
          </FeatureGrid>
        </FeatureSection>
      ))}
    </FeaturesContainer>
  );
};

export default Features; 