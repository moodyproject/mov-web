import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { backgroundStyles } from '../components/ui';
import { 
  UniversalGrid, 
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

const FeaturesGrid = styled(UniversalGrid)`
  grid-template-columns: repeat(3, 1fr);
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const FeatureCard = styled(UniversalFeatureCard)`
  &:hover {
    transform: translateY(-8px) scale(1.02);
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.3;
  margin: 0;
`;

const FeatureDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
  font-size: 0.95rem;
  margin: 0;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  flex: 1;
`;

const FeatureItem = styled.li`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 0.5rem;
  padding-left: 1.25rem;
  position: relative;

  &::before {
    content: '→';
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.components.button.primary.background};
    transition: transform 0.3s ease;
  }

  ${FeatureCard}:hover &::before {
    transform: translateX(4px);
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const DataGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const DataCard = styled(FeatureCard)``;

const DataMetrics = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 0.5rem;
`;

const Metric = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const MetricValue = styled.div`
  font-size: 2.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.components.button.primary.background};
  line-height: 1;
`;

const MetricLabel = styled.div`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const ReadinessCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 0;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const ReadinessCard = styled(FeatureCard)``;

const ReadinessMetric = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ReadinessValue = styled.div`
  font-size: 3rem;
  font-weight: 600;
  color: ${({ theme }) => theme.components.button.primary.background};
  line-height: 1;
`;

const ReadinessInfo = styled.div`
  flex: 1;
`;

const ReadinessLabel = styled.div`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const ReadinessDescription = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.5;
`;

const CommandCenter = () => {
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
              Command & Control
            </Overline>
            <SectionTitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Command & Control Dashboard
            </SectionTitle>
            <Description
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Advanced analytics and monitoring platform providing comprehensive visibility into unit performance,
              training effectiveness, and readiness metrics across all echelons of command.
            </Description>
          </HeaderContainer>

          <FeaturesGrid>
            <FeatureCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
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
              transition={{ duration: 0.5, delay: 0.2 }}
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
              transition={{ duration: 0.5, delay: 0.3 }}
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
      </ShowcaseSection>

      <ShowcaseSection>
        <ContentWrapper>
          <HeaderContainer>
            <Overline
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Actionable Insights
            </Overline>
            <SectionTitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Data-Driven Decision Making
            </SectionTitle>
            <Description
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Leverage advanced analytics to make informed decisions and optimize training effectiveness
            </Description>
          </HeaderContainer>

          <DataGrid>
            <DataCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
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
              transition={{ duration: 0.5, delay: 0.2 }}
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
              Combat Readiness
            </Overline>
            <SectionTitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Unit Readiness & Compliance
            </SectionTitle>
            <Description
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Real-time monitoring of unit readiness levels and compliance metrics across all training requirements
            </Description>
          </HeaderContainer>

          <ReadinessCards>
            <ReadinessCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
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
              transition={{ duration: 0.5, delay: 0.2 }}
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
              transition={{ duration: 0.5, delay: 0.3 }}
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
        </ContentWrapper>
      </ShowcaseSection>
    </>
  );
};

export default CommandCenter; 