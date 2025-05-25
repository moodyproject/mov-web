import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import PerformanceGraph from '../components/PerformanceGraph';
import { backgroundStyles } from '../components/ui';
import { 
  UniversalGrid, 
  UniversalMetricCard, 
  UniversalChartContainer, 
  UniversalFeatureCard, 
  UniversalSection, 
  UniversalContentWrapper, 
  UniversalHeaderContainer 
} from '../styles/UniversalStyles';

const ShowcaseSection = styled(UniversalSection)`
  ${backgroundStyles}
  width: 100%;
  height: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentWrapper = styled(UniversalContentWrapper)`
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  gap: 2rem;
`;

const HeaderContainer = styled(UniversalHeaderContainer)`
  text-align: center;
  position: relative;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding: 2rem 0;
`;

const Overline = styled(motion.span)`
  display: inline-block;
  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.components.button.primary.background};
  margin-bottom: 1.5rem;
  padding: 0.75rem 1.5rem;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: 100px;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.2;
`;

const Description = styled(motion.p)`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 640px;
  margin: 0 auto;
  line-height: 1.6;
`;

const MetricsGrid = styled(UniversalGrid)`
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  max-width: 900px;
  margin: 0 auto;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    max-width: 600px;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    max-width: 400px;
  }
`;

const MetricCard = styled(UniversalMetricCard)`
  min-height: 180px;
  
  @media (max-width: 768px) {
    min-height: 160px;
  }
`;

const MetricValue = styled.div`
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  font-weight: 600;
  color: ${({ theme }) => theme.components.button.primary.background};
  margin-bottom: 0.25rem;
  letter-spacing: -0.02em;
  font-family: "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif;
`;

const MetricLabel = styled.div`
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  margin-bottom: 0.5rem;
  letter-spacing: -0.01em;
`;

const MetricDescription = styled.div`
  font-size: clamp(0.8rem, 1.5vw, 0.9rem);
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.4;
  opacity: 0.8;
  max-width: 200px;
  transition: all 0.3s ease;

  ${MetricCard}:hover & {
    color: ${({ theme }) => theme.colors.text};
    opacity: 1;
  }
`;

const ChartContainer = styled(UniversalChartContainer)`
  height: 500px;
  margin: 2rem auto 0;
`;

const InsightsGrid = styled(UniversalGrid)`
  grid-template-columns: repeat(2, 1fr);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const InsightCard = styled(UniversalFeatureCard)`
  gap: 1.25rem;
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
  }
`;

const InsightTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  font-weight: 600;
`;

const InsightDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.5;
  margin: 0;
  font-size: 1rem;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const Feature = styled.li`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1rem;
  line-height: 1.5;
  padding-left: 1.5rem;
  position: relative;

  &::before {
    content: '→';
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.components.button.primary.background};
    transition: transform 0.3s ease;
  }

  ${InsightCard}:hover &::before {
    transform: translateX(4px);
    color: ${({ theme }) => theme.colors.text};
  }
`;

const metrics = [
  {
    label: "Accuracy Rate",
    value: "99.8%",
    description: "High-precision tracking of individual and unit movements in real-time combat scenarios"
  },
  {
    label: "Processing Speed",
    value: "<5ms",
    description: "Ultra-low latency analysis enabling immediate tactical adjustments during training"
  },
  {
    label: "Data Points",
    value: "1M+",
    description: "Comprehensive analysis of movement patterns, positioning, and tactical decisions"
  }
];

const insights = [
  {
    title: "Tactical Performance Analysis",
    description: "Advanced AI algorithms analyze movement patterns and tactical decisions in real-time.",
    features: [
      "Unit positioning optimization",
      "Formation effectiveness analysis",
      "Combat readiness scoring"
    ]
  },
  {
    title: "Predictive Combat Modeling",
    description: "Machine learning models predict and simulate combat scenarios based on collected data.",
    features: [
      "Scenario outcome prediction",
      "Risk assessment modeling",
      "Strategic decision support"
    ]
  },
  {
    title: "Training Optimization",
    description: "Data-driven insights to enhance training effectiveness and unit performance.",
    features: [
      "Personalized training programs",
      "Performance trend analysis",
      "Skill gap identification"
    ]
  },
  {
    title: "Real-time Battlefield Analytics",
    description: "Instant analysis of combat situations for improved tactical decision-making.",
    features: [
      "Live performance metrics",
      "Team coordination analysis",
      "Tactical advantage scoring"
    ]
  }
];

const DataAnalytics = () => {
  return (
    <>
      <ShowcaseSection>
        <ContentWrapper>
          <HeaderContainer>
            <Overline
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Advanced Analytics
            </Overline>
            <SectionTitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Combat Performance Intelligence
            </SectionTitle>
            <Description
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Transform training data into actionable insights with our advanced analytics platform,
              delivering real-time performance metrics and tactical recommendations.
            </Description>
          </HeaderContainer>

          <MetricsGrid>
            {metrics.map((metric, index) => (
              <MetricCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <MetricValue>{metric.value}</MetricValue>
                <MetricLabel>{metric.label}</MetricLabel>
                <MetricDescription>{metric.description}</MetricDescription>
              </MetricCard>
            ))}
          </MetricsGrid>
        </ContentWrapper>
      </ShowcaseSection>

      <ShowcaseSection>
        <ContentWrapper>
          <HeaderContainer>
            <Overline
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Performance Metrics
            </Overline>
            <SectionTitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Training Progress Analytics
            </SectionTitle>
            <Description
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Track performance improvements and identify areas for enhancement with our comprehensive analytics dashboard.
            </Description>
          </HeaderContainer>
          
          <ChartContainer
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <PerformanceGraph title="Performance Metrics" />
          </ChartContainer>
        </ContentWrapper>
      </ShowcaseSection>

      <ShowcaseSection>
        <ContentWrapper>
          <HeaderContainer>
            <Overline
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Intelligent Insights
            </Overline>
            <SectionTitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Data-Driven Combat Excellence
            </SectionTitle>
            <Description
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Leverage advanced machine learning algorithms to unlock deeper insights into combat performance
              and tactical effectiveness.
            </Description>
          </HeaderContainer>

          <InsightsGrid>
            {insights.map((insight, index) => (
              <InsightCard
                key={insight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <InsightTitle>{insight.title}</InsightTitle>
                <InsightDescription>{insight.description}</InsightDescription>
                <FeatureList>
                  {insight.features.map((feature, i) => (
                    <Feature key={i}>{feature}</Feature>
                  ))}
                </FeatureList>
              </InsightCard>
            ))}
          </InsightsGrid>
        </ContentWrapper>
      </ShowcaseSection>
    </>
  );
};

export default DataAnalytics; 