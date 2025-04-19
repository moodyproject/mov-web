import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const BenefitsContainer = styled.section`
  height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  background: radial-gradient(
    circle at center,
    var(--color-surface) 0%,
    var(--color-background) 100%
  );

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at 50% 50%,
      var(--color-accent) 0%,
      transparent 70%
    );
    opacity: 0.05;
    z-index: 1;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const HeaderContainer = styled.div`
  text-align: center;
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const Overline = styled(motion.span)`
  display: inline-block;
  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  color: var(--color-accent);
  padding: 0.75rem 1.5rem;
  background: var(--color-surface);
  border-radius: 100px;
  border: 1px solid var(--color-border);
  width: fit-content;
  margin: 0 auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--color-accent);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(139, 92, 246, 0.1);
  }
`;

const Title = styled(motion.h2)`
  font-size: clamp(2rem, 4vw, 3rem);
  color: var(--color-text-primary);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.2;
  margin: 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Description = styled(motion.p)`
  font-size: 1.125rem;
  color: var(--color-text-secondary);
  max-width: 640px;
  margin: 0 auto;
  line-height: 1.6;
  opacity: 0.9;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  width: 100%;
  padding: 0 1rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const BenefitCard = styled(motion.div)`
  padding: 2rem;
  background: var(--color-surface);
  border-radius: 20px;
  border: 1px solid var(--color-border);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(139, 92, 246, 0.05) 0%, transparent 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }

  &:hover {
    transform: translateY(-4px);
    border-color: var(--color-accent);
    box-shadow: 0 8px 24px rgba(139, 92, 246, 0.1);

    &::before {
      opacity: 1;
    }
  }
`;

const MetricContainer = styled.div`
  margin-bottom: 0.5rem;
`;

const Metric = styled.div`
  font-size: 2.5rem;
  font-weight: 600;
  color: var(--color-accent);
  font-family: "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif;
  letter-spacing: -0.02em;
  line-height: 1;
  text-shadow: 0 2px 4px rgba(139, 92, 246, 0.2);
`;

const MetricLabel = styled.div`
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 500;
`;

const BenefitTitle = styled.h3`
  font-size: 1.25rem;
  color: var(--color-text-primary);
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.3;
  margin: 0;
`;

const BenefitDescription = styled.p`
  color: var(--color-text-secondary);
  line-height: 1.6;
  font-size: 1rem;
  margin: 0;
  opacity: 0.9;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  flex: 1;
`;

const Feature = styled.li`
  color: var(--color-text-secondary);
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 0.5rem;
  padding-left: 1.25rem;
  position: relative;
  opacity: 0.9;

  &::before {
    content: '→';
    position: absolute;
    left: 0;
    color: var(--color-accent);
    transition: transform 0.3s ease;
  }

  ${BenefitCard}:hover &::before {
    transform: translateX(4px);
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const benefits = [
  {
    id: 1,
    metric: '98%',
    metricLabel: 'Detection Rate',
    title: 'Superior Motion Intelligence',
    description: 'Our advanced algorithms provide unmatched accuracy in motion detection and analysis.',
    features: [
      'Real-time biomechanical analysis',
      'AI-powered movement prediction',
      'Multi-point tracking system'
    ]
  },
  {
    id: 2,
    metric: '0.5ms',
    metricLabel: 'Response Time',
    title: 'Instant Tactical Feedback',
    description: 'Ultra-low latency feedback system ensures immediate response to changing situations.',
    features: [
      'Sub-millisecond data processing',
      'Neural network optimization',
      'Predictive alert system'
    ]
  },
  {
    id: 3,
    metric: '10x',
    metricLabel: 'Performance Gain',
    title: 'Enhanced Combat Readiness',
    description: 'Comprehensive training analytics and monitoring for improved effectiveness.',
    features: [
      'Personalized training protocols',
      'Fatigue prevention algorithms',
      'Performance trend analysis'
    ]
  }
];

const BenefitsSection = () => {
  return (
    <BenefitsContainer>
      <ContentWrapper>
        <HeaderContainer>
          <Overline
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Operational Advantages
          </Overline>
          <Title
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            The mov Strategic Edge
          </Title>
          <Description
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Experience unprecedented precision in motion tracking with our military-grade technology.
          </Description>
        </HeaderContainer>

        <Grid>
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={benefit.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <MetricContainer>
                <Metric>{benefit.metric}</Metric>
                <MetricLabel>{benefit.metricLabel}</MetricLabel>
              </MetricContainer>
              <BenefitTitle>{benefit.title}</BenefitTitle>
              <BenefitDescription>{benefit.description}</BenefitDescription>
              <FeatureList>
                {benefit.features.map((feature, i) => (
                  <Feature key={i}>{feature}</Feature>
                ))}
              </FeatureList>
            </BenefitCard>
          ))}
        </Grid>
      </ContentWrapper>
    </BenefitsContainer>
  );
};

export default BenefitsSection; 