import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import PerformanceGraph from '../components/PerformanceGraph';

const PageContainer = styled.div`
  background: radial-gradient(
    circle at center,
    var(--color-surface) 0%,
    var(--color-background) 100%
  );
  position: relative;
  overflow-x: hidden;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
  overflow-y: auto;
  height: 100vh;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at 50% 50%,
      var(--color-accent) 0%,
      transparent 70%
    );
    opacity: 0.1;
    z-index: 1;
  }

  /* Custom scrollbar styling */
  &::-webkit-scrollbar {
    width: 8px;
    background: transparent;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.2);
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-accent);
    border-radius: 4px;
    opacity: 0.5;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--color-accent-hover);
  }
`;

const Section = styled.section`
  min-height: 100vh;
  scroll-snap-align: start;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 0;
  background: radial-gradient(
    circle at center,
    var(--color-surface) 0%,
    var(--color-background) 100%
  );

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at 50% 50%,
      var(--color-accent) 0%,
      transparent 70%
    );
    opacity: 0.1;
    z-index: 1;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1800px;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderSection = styled.div`
  text-align: center;
  max-width: 800px;
  width: 100%;
  margin-bottom: 3rem;
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
  color: var(--color-text-primary);
  padding: 0.75rem 1.5rem;
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid var(--color-border);
  border-radius: 100px;
  width: fit-content;
`;

const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 600;
  color: var(--color-text-primary);
  line-height: 1.2;
  margin: 0;
  letter-spacing: -0.02em;
`;

const Description = styled(motion.p)`
  font-size: 1.25rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  max-width: 640px;
  margin: 0 auto;
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const MetricCard = styled(motion.div)`
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid var(--color-border);
  border-radius: 24px;
  padding: 2rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: var(--color-accent);
    background: rgba(0, 0, 0, 0.3);
  }
`;

const MetricValue = styled.div`
  font-size: 3rem;
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: 1rem;
  line-height: 1;
`;

const MetricLabel = styled.div`
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const MetricTitle = styled.h3`
  font-size: 1.25rem;
  color: var(--color-text-primary);
  margin: 0 0 1rem 0;
  font-weight: 600;
`;

const MetricDescription = styled.p`
  color: var(--color-text-secondary);
  line-height: 1.6;
  font-size: 1rem;
  margin: 0;
`;

const GraphSection = styled.div`
  width: 100%;
  max-width: 1800px;
  margin: 0 auto;
  padding: 0 4rem;
`;

const GraphGrid = styled.div`
  width: 100%;
  background: transparent;
  border: none;
  border-radius: 24px;
  padding: 2.5rem;
  height: 450px;
  display: flex;
  flex-direction: column;
`;

const GraphContainer = styled.div`
  width: 100%;
  height: 100%;
  background: transparent;
  border-radius: 20px;
  overflow: hidden;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
`;

const GraphContent = styled.div`
  flex: 1;
  width: 100%;
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  padding: 1.5rem;
`;

const InsightsSection = styled.div`
  width: 100%;
  max-width: 1800px;
  margin: 0 auto;
  padding: 0 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InsightsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const InsightCard = styled(motion.div)`
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid var(--color-border);
  border-radius: 24px;
  padding: 2rem;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  &:hover {
    transform: translateY(-4px);
    border-color: var(--color-accent);
    background: rgba(0, 0, 0, 0.3);
  }
`;

const InsightTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--color-text-primary);
  margin: 0;
  font-weight: 600;
`;

const InsightDescription = styled.p`
  color: var(--color-text-secondary);
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
  color: var(--color-text-secondary);
  font-size: 1rem;
  line-height: 1.5;
  padding-left: 1.5rem;
  position: relative;

  &::before {
    content: '→';
    position: absolute;
    left: 0;
    color: var(--color-accent);
    transition: transform 0.3s ease;
  }

  ${InsightCard}:hover &::before {
    transform: translateX(4px);
    color: var(--color-text-primary);
  }
`;

const metrics = [
  {
    label: "Accuracy Rate",
    value: "99.8%",
    title: "Movement Analysis",
    description: "High-precision tracking of individual and unit movements in real-time combat scenarios"
  },
  {
    label: "Processing Speed",
    value: "<5ms",
    title: "Instant Feedback",
    description: "Ultra-low latency analysis enabling immediate tactical adjustments during training"
  },
  {
    label: "Data Points",
    value: "1M+",
    title: "Daily Insights",
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
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = [useRef(null), useRef(null), useRef(null)];

  const scrollToSection = (index) => {
    sectionRefs[index].current?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(index);
  };

  useEffect(() => {
    const handleScroll = () => {
      const pageTop = window.pageYOffset;
      sectionRefs.forEach((ref, index) => {
        const element = ref.current;
        if (!element) return;
        
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <PageContainer>
      <Section ref={sectionRefs[0]}>
        <ContentWrapper>
          <HeaderSection>
            <Overline
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Advanced Analytics
            </Overline>
            <Title
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Combat Performance Intelligence
            </Title>
            <Description
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Transform training data into actionable insights with our advanced analytics platform,
              delivering real-time performance metrics and tactical recommendations.
            </Description>
          </HeaderSection>

          <MetricsGrid>
            {metrics.map((metric, index) => (
              <MetricCard
                key={metric.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <MetricLabel>{metric.label}</MetricLabel>
                <MetricValue>{metric.value}</MetricValue>
                <MetricTitle>{metric.title}</MetricTitle>
                <MetricDescription>{metric.description}</MetricDescription>
              </MetricCard>
            ))}
          </MetricsGrid>
        </ContentWrapper>
      </Section>

      <Section ref={sectionRefs[1]}>
        <ContentWrapper>
          <HeaderSection style={{ marginBottom: '3rem' }}>
            <Overline>Performance Metrics</Overline>
            <Title style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Training Progress Analytics
            </Title>
            <Description>
              Track performance improvements and identify areas for enhancement with our comprehensive analytics dashboard.
            </Description>
          </HeaderSection>
          <GraphSection>
            <GraphGrid>
              <PerformanceGraph title="Performance Metrics" />
            </GraphGrid>
          </GraphSection>
        </ContentWrapper>
      </Section>

      <Section ref={sectionRefs[2]}>
        <InsightsSection>
          <HeaderSection style={{ marginBottom: '3rem' }}>
            <Overline
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Intelligent Insights
            </Overline>
            <Title
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Data-Driven Combat Excellence
            </Title>
            <Description
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Leverage advanced machine learning algorithms to unlock deeper insights into combat performance
              and tactical effectiveness.
            </Description>
          </HeaderSection>

          <InsightsGrid>
            {insights.map((insight, index) => (
              <InsightCard
                key={insight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
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
        </InsightsSection>
      </Section>
    </PageContainer>
  );
};

export default DataAnalytics; 