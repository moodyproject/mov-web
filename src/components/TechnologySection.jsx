import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TechContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
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

const HeaderContainer = styled.div`
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
  color: var(--color-accent);
  padding: 0.75rem 1.5rem;
  background: var(--color-surface);
  border-radius: 100px;
  border: 1px solid var(--color-border);
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

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const TechCategory = styled(motion.div)`
  background: var(--color-surface);
  border-radius: 24px;
  border: 1px solid var(--color-border);
  padding: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;

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

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--color-text-primary);
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
    background: var(--color-accent);
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
    background: var(--color-accent);
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
  color: var(--color-text-primary);
  margin: 0 0 0.5rem 0;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SpecValue = styled.p`
  font-size: 0.9375rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin: 0 0 0.25rem 0;
  font-weight: 500;
`;

const SpecDetail = styled.span`
  display: block;
  font-size: 0.875rem;
  color: var(--color-accent);
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
            <TechCategory
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
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
          ))}
        </TechGrid>
      </ContentWrapper>
    </TechContainer>
  );
};

export default TechnologySection; 