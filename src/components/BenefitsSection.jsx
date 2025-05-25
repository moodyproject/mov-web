import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { backgroundStyles } from './ui';
import { 
  UniversalGrid, 
  UniversalMetricCard, 
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
  gap: 1rem;
  
  @media (min-width: 1024px) {
    padding: 1rem 2rem;
    gap: 0.5rem;
  }
`;

const HeaderContainer = styled(UniversalHeaderContainer)`
  text-align: center;
  position: relative;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  
  @media (min-width: 1024px) {
    padding: 1rem 0;
  }
  
  @media (max-width: 1023px) {
    padding: 2rem 0;
  }
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

const BenefitsGrid = styled(UniversalGrid)`
  grid-template-columns: repeat(4, 1fr);
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    padding: 0.5rem 0;
  }

  @media (max-width: 1023px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    padding: 2rem 0;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const BenefitCard = styled(UniversalMetricCard)`
  @media (min-width: 1024px) {
    min-height: 140px;
    padding: 1rem;
  }
  
  @media (max-width: 1023px) {
    min-height: 160px;
    padding: 2rem;
    aspect-ratio: auto;
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

const BenefitDescription = styled.div`
  font-size: clamp(0.8rem, 1.5vw, 0.9rem);
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.4;
  opacity: 0.8;
  max-width: 200px;
  transition: all 0.3s ease;

  ${BenefitCard}:hover & {
    color: ${({ theme }) => theme.colors.text};
    opacity: 1;
  }
`;

const simplifiedBenefits = [
  { 
    value: '98%', 
    label: 'Detection Rate',
    description: 'Ultra-precise motion tracking for unparalleled accuracy'
  },
  { 
    value: '0.5ms', 
    label: 'Response Time',
    description: 'Immediate tactical feedback in changing situations'
  },
  { 
    value: '10x', 
    label: 'Performance',
    description: 'Enhanced training efficacy through precision feedback'
  },
  { 
    value: '64%', 
    label: 'Error Reduction',
    description: 'Improved safety with early detection of issues'
  },
  { 
    value: '5G', 
    label: 'Connectivity',
    description: 'Seamless integration with existing military systems'
  },
  { 
    value: '24/7', 
    label: 'Support',
    description: 'Dedicated service for optimal system performance'
  },
  { 
    value: '45g', 
    label: 'Ultra-Light',
    description: 'Minimal impact on mobility and agility'
  },
  { 
    value: '100m', 
    label: 'Range',
    description: 'Secure communication with extended operational range'
  }
];

const BenefitsSection = () => {
  return (
    <ShowcaseSection>
      <ContentWrapper>
        <HeaderContainer>
          <Overline
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Key Benefits
          </Overline>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Transform Military Training & Operations
          </SectionTitle>
          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Our comprehensive motion tracking system provides numerous advantages for military applications, enhancing both training efficiency and operational effectiveness.
          </Description>
        </HeaderContainer>

        <BenefitsGrid>
          {simplifiedBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <BenefitCard>
                <MetricValue>{benefit.value}</MetricValue>
                <MetricLabel>{benefit.label}</MetricLabel>
                <BenefitDescription>{benefit.description}</BenefitDescription>
              </BenefitCard>
            </motion.div>
          ))}
        </BenefitsGrid>
      </ContentWrapper>
    </ShowcaseSection>
  );
};

export default BenefitsSection; 