import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import PageContainer from '../components/common/PageContainer';

const Section = styled.section`
  height: 100vh;
  scroll-snap-align: start;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 0;
  z-index: 2;
  scroll-snap-stop: always;
  background: var(--color-background);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at 50% 50%,
      var(--color-accent) 0%,
      transparent 70%
    );
    opacity: 0.1;
    pointer-events: none;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
  z-index: 2;
`;

const Title = styled(motion.h1)`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: 1.5rem;
  line-height: 1.2;
`;

const Description = styled(motion.p)`
  font-size: 1.25rem;
  color: var(--color-text-secondary);
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled(motion.div)`
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid var(--color-border);
  border-radius: 24px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  &:hover {
    border-color: var(--color-accent);
    transform: translateY(-4px);
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: 0.5rem;
`;

const FeatureDescription = styled.p`
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const FeatureItem = styled.li`
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '•';
    color: var(--color-accent);
    font-size: 1.2rem;
    line-height: 1;
  }
`;

const DataSection = styled.div`
  margin: 6rem 0;
`;

const DataGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const DataCard = styled(motion.div)`
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid var(--color-border);
  border-radius: 24px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  &:hover {
    border-color: var(--color-accent);
    transform: translateY(-4px);
  }
`;

const DataMetrics = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
`;

const Metric = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const MetricValue = styled.div`
  font-size: 2.5rem;
  font-weight: 600;
  color: var(--color-accent);
  line-height: 1;
`;

const MetricLabel = styled.div`
  font-size: 0.95rem;
  color: var(--color-text-secondary);
`;

const ReadinessSection = styled.div`
  margin: 6rem 0;
`;

const ReadinessCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ReadinessCard = styled(motion.div)`
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid var(--color-border);
  border-radius: 24px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  &:hover {
    border-color: var(--color-accent);
    transform: translateY(-4px);
  }
`;

const ReadinessMetric = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ReadinessValue = styled.div`
  font-size: 3rem;
  font-weight: 600;
  color: var(--color-accent);
  line-height: 1;
`;

const ReadinessInfo = styled.div`
  flex: 1;
`;

const ReadinessLabel = styled.div`
  font-size: 1.1rem;
  color: var(--color-text-primary);
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const ReadinessDescription = styled.div`
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  line-height: 1.5;
`;

const CommandCenter = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const sections = ['overview', 'analytics', 'readiness'];
  const sectionRefs = sections.map(() => useRef(null));

  useEffect(() => {
    const handleScroll = () => {
      const pageTop = window.scrollY;
      const pageBottom = pageTop + window.innerHeight;
      const viewportMiddle = pageTop + (window.innerHeight / 2);

      sectionRefs.forEach((ref, index) => {
        if (!ref.current) return;

        const elementTop = ref.current.offsetTop;
        const elementBottom = elementTop + ref.current.offsetHeight;

        if (elementTop <= viewportMiddle && elementBottom >= viewportMiddle) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleWheel = (e) => {
      if (isScrolling) return;
      
      e.preventDefault();
      const delta = e.deltaY;
      const currentIndex = activeSection;
      let nextIndex;

      if (delta > 0 && currentIndex < sections.length - 1) {
        nextIndex = currentIndex + 1;
      } else if (delta < 0 && currentIndex > 0) {
        nextIndex = currentIndex - 1;
      } else {
        return;
      }

      setIsScrolling(true);
      sectionRefs[nextIndex].current.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(nextIndex);

      // Reset scrolling state after animation completes
      setTimeout(() => {
        setIsScrolling(false);
      }, 1000); // Adjust this value based on your scroll animation duration
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [activeSection, isScrolling]);

  return (
    <PageContainer>
      <Section ref={sectionRefs[0]}>
        <ContentWrapper>
          <HeaderSection>
            <Title
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Command & Control Dashboard
            </Title>
            <Description
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Advanced analytics and monitoring platform providing comprehensive visibility into unit performance,
              training effectiveness, and readiness metrics across all echelons of command.
            </Description>
          </HeaderSection>

          <FeaturesGrid>
            <FeatureCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <FeatureTitle>Real-Time Performance Tracking</FeatureTitle>
              <FeatureDescription>
                Comprehensive monitoring of individual and unit performance metrics in real-time.
              </FeatureDescription>
              <FeatureList>
                <FeatureItem>Live ACFT score tracking and analysis</FeatureItem>
                <FeatureItem>Physical training progression metrics</FeatureItem>
                <FeatureItem>Injury risk assessment indicators</FeatureItem>
                <FeatureItem>Unit readiness status updates</FeatureItem>
                <FeatureItem>Training attendance and completion rates</FeatureItem>
              </FeatureList>
            </FeatureCard>

            <FeatureCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <FeatureTitle>AI-Powered Analytics</FeatureTitle>
              <FeatureDescription>
                Advanced machine learning algorithms for predictive insights and trend analysis.
              </FeatureDescription>
              <FeatureList>
                <FeatureItem>Performance trend predictions</FeatureItem>
                <FeatureItem>Early injury risk detection</FeatureItem>
                <FeatureItem>Training program optimization</FeatureItem>
                <FeatureItem>Resource allocation recommendations</FeatureItem>
                <FeatureItem>Comparative unit analysis</FeatureItem>
              </FeatureList>
            </FeatureCard>

            <FeatureCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <FeatureTitle>Command Integration</FeatureTitle>
              <FeatureDescription>
                Seamless integration across command levels with role-based access control.
              </FeatureDescription>
              <FeatureList>
                <FeatureItem>Customizable command dashboards</FeatureItem>
                <FeatureItem>Automated reporting systems</FeatureItem>
                <FeatureItem>Cross-unit coordination tools</FeatureItem>
                <FeatureItem>Mobile command access</FeatureItem>
                <FeatureItem>Secure data transmission</FeatureItem>
              </FeatureList>
            </FeatureCard>
          </FeaturesGrid>
        </ContentWrapper>
      </Section>

      <Section ref={sectionRefs[1]}>
        <ContentWrapper>
          <DataSection>
            <HeaderSection>
              <Title
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              >
                Data-Driven Decision Making
              </Title>
              <Description
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Leverage advanced analytics to make informed decisions and optimize training effectiveness
              </Description>
            </HeaderSection>

            <DataGrid>
              <DataCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <FeatureTitle>Training Optimization</FeatureTitle>
                <FeatureDescription>
                  AI-driven insights help optimize training programs for maximum effectiveness while minimizing injury risk.
                </FeatureDescription>
                <DataMetrics>
                  <Metric>
                    <MetricValue>85%</MetricValue>
                    <MetricLabel>Improved ACFT Scores</MetricLabel>
                  </Metric>
                  <Metric>
                    <MetricValue>40%</MetricValue>
                    <MetricLabel>Reduced Injury Rates</MetricLabel>
                  </Metric>
                </DataMetrics>
              </DataCard>

              <DataCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <FeatureTitle>Resource Management</FeatureTitle>
                <FeatureDescription>
                  Optimize resource allocation and training schedules based on real-time performance data and unit needs.
                </FeatureDescription>
                <DataMetrics>
                  <Metric>
                    <MetricValue>30%</MetricValue>
                    <MetricLabel>Improved Efficiency</MetricLabel>
                  </Metric>
                  <Metric>
                    <MetricValue>95%</MetricValue>
                    <MetricLabel>Training Completion</MetricLabel>
                  </Metric>
                </DataMetrics>
              </DataCard>
            </DataGrid>
          </DataSection>
        </ContentWrapper>
      </Section>

      <Section ref={sectionRefs[2]}>
        <ContentWrapper>
          <ReadinessSection>
            <HeaderSection>
              <Title
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              >
                Unit Readiness & Compliance
              </Title>
              <Description
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Real-time monitoring of unit readiness levels and compliance metrics across all training requirements
              </Description>
            </HeaderSection>

            <ReadinessCards>
              <ReadinessCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <ReadinessMetric>
                  <ReadinessValue>98%</ReadinessValue>
                  <ReadinessInfo>
                    <ReadinessLabel>ACFT Compliance</ReadinessLabel>
                    <ReadinessDescription>
                      Soldiers meeting or exceeding ACFT standards across all events
                    </ReadinessDescription>
                  </ReadinessInfo>
                </ReadinessMetric>
                <FeatureList>
                  <FeatureItem>Event-specific performance tracking</FeatureItem>
                  <FeatureItem>Historical trend analysis</FeatureItem>
                  <FeatureItem>Individual improvement metrics</FeatureItem>
                </FeatureList>
              </ReadinessCard>

              <ReadinessCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <ReadinessMetric>
                  <ReadinessValue>92%</ReadinessValue>
                  <ReadinessInfo>
                    <ReadinessLabel>Training Readiness</ReadinessLabel>
                    <ReadinessDescription>
                      Overall unit readiness based on training completion and performance
                    </ReadinessDescription>
                  </ReadinessInfo>
                </ReadinessMetric>
                <FeatureList>
                  <FeatureItem>Required training completion</FeatureItem>
                  <FeatureItem>Qualification status tracking</FeatureItem>
                  <FeatureItem>Unit certification metrics</FeatureItem>
                </FeatureList>
              </ReadinessCard>

              <ReadinessCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <ReadinessMetric>
                  <ReadinessValue>94%</ReadinessValue>
                  <ReadinessInfo>
                    <ReadinessLabel>Medical Readiness</ReadinessLabel>
                    <ReadinessDescription>
                      Medical and physical readiness status across all personnel
                    </ReadinessDescription>
                  </ReadinessInfo>
                </ReadinessMetric>
                <FeatureList>
                  <FeatureItem>Injury prevention tracking</FeatureItem>
                  <FeatureItem>Recovery progress monitoring</FeatureItem>
                  <FeatureItem>Health assessment compliance</FeatureItem>
                </FeatureList>
              </ReadinessCard>
            </ReadinessCards>
          </ReadinessSection>
        </ContentWrapper>
      </Section>
    </PageContainer>
  );
};

export default CommandCenter; 