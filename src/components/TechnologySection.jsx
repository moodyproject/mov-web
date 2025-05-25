import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { backgroundStyles } from './ui';
import { 
  UniversalGrid, 
  UniversalFeatureCard, 
  UniversalSection, 
  UniversalContentWrapper, 
  UniversalHeaderContainer 
} from '../styles/UniversalStyles';

const TechContainer = styled(UniversalSection)`
  ${backgroundStyles}
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const ContentWrapper = styled(UniversalContentWrapper)`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  position: relative;
  z-index: 2;
`;

const HeaderContainer = styled(UniversalHeaderContainer)`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const Overline = styled(motion.span)`
  display: inline-block;
  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.components.button.primary.background};
  padding: 0.75rem 1.5rem;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: 100px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  margin: 0 auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.components.button.primary.background};
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(109, 40, 217, 0.1);
  }
`;

const Title = styled(motion.h2)`
  font-size: clamp(2rem, 4vw, 3rem);
  color: ${({ theme }) => theme.colors.text};
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.2;
  margin: 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Description = styled(motion.p)`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 640px;
  margin: 0 auto;
  line-height: 1.6;
  opacity: 0.9;
`;

const TechGrid = styled(UniversalGrid)`
  grid-template-columns: repeat(2, 1fr);
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const TechCategory = styled(UniversalFeatureCard)`
  gap: 1.75rem;
  
  &:hover {
    transform: translateY(-4px);
  }
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  letter-spacing: -0.02em;
  margin: 0;
  position: relative;
  padding-bottom: 0.75rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 32px;
    height: 2px;
    background: ${({ theme }) => theme.components.button.primary.background};
    border-radius: 1px;
    transition: width 0.3s ease;
  }

  ${TechCategory}:hover &::after {
    width: 64px;
  }
`;

const SpecList = styled.div`
  display: grid;
  gap: 1.5rem;
  flex: 1;
`;

const SpecItem = styled(motion.div)`
  position: relative;
  padding-left: 1.5rem;
  opacity: 0;
  transform: translateY(20px);

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.5rem;
    width: 6px;
    height: 6px;
    background: ${({ theme }) => theme.components.button.primary.background};
    border-radius: 2px;
    transform: rotate(45deg);
    transition: transform 0.3s ease;
  }

  ${TechCategory}:hover &::before {
    transform: rotate(90deg);
  }
`;

const SpecTitle = styled.h4`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 0.5rem 0;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SpecValue = styled.p`
  font-size: 0.9375rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
  margin: 0 0 0.25rem 0;
  font-weight: 500;
`;

const SpecDetail = styled.span`
  display: block;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.components.button.primary.background};
  opacity: 0.9;
  font-family: "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif;
  letter-spacing: 0.02em;
  transition: opacity 0.3s ease;

  ${TechCategory}:hover & {
    opacity: 1;
  }
`;

const techSpecs = {
  hardware: {
    title: "Hardware Specifications",
    specs: [
      {
        title: "Sensor Array",
        value: "Multi-Modal Sensor Fusion System",
        detail: "9-axis IMU, dual accelerometers, advanced gyroscopes"
      },
      {
        title: "Memory Configuration",
        value: "4GB High-Speed LPDDR4",
        detail: "ECC protection, secure storage partition"
      },
      {
        title: "Power System",
        value: "Smart Power Management",
        detail: "72+ hours operation, hot-swappable battery"
      }
    ]
  },
  capabilities: {
    title: "Technical Capabilities",
    specs: [
      {
        title: "Motion Analysis",
        value: "Advanced Biomechanical Processing",
        detail: "0.1mm precision, 1000Hz sampling rate"
      },
      {
        title: "Data Security",
        value: "Military-Grade Encryption",
        detail: "AES-256, secure element, anti-tamper"
      },
      {
        title: "Environmental Rating",
        value: "MIL-STD-810H Certified",
        detail: "IP68, -40°C to +85°C operational range"
      }
    ]
  }
};

const TechnologySection = () => {
  return (
    <TechContainer>
      <ContentWrapper>
        <HeaderContainer>
          <Overline
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Advanced Technology
          </Overline>
          <Title
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Cutting-Edge Hardware & Software
          </Title>
          <Description
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our technology stack combines military-grade hardware with advanced software algorithms for unparalleled performance.
          </Description>
        </HeaderContainer>

        <TechGrid>
          {Object.entries(techSpecs).map(([key, category], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <TechCategory>
                <CategoryTitle>{category.title}</CategoryTitle>
                <SpecList>
                  {category.specs.map((spec, specIndex) => (
                    <SpecItem
                      key={specIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 + specIndex * 0.1 }}
                    >
                      <SpecTitle>{spec.title}</SpecTitle>
                      <SpecValue>{spec.value}</SpecValue>
                      <SpecDetail>{spec.detail}</SpecDetail>
                    </SpecItem>
                  ))}
                </SpecList>
              </TechCategory>
            </motion.div>
          ))}
        </TechGrid>
      </ContentWrapper>
    </TechContainer>
  );
};

export default TechnologySection; 