import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ProductViewer3D from './ProductViewer3D';

const ViewerSection = styled.section`
  width: 100%;
  min-height: 100vh;
  background: radial-gradient(
    circle at center,
    var(--color-surface) 0%,
    var(--color-background) 100%
  );
  position: relative;
  overflow: hidden;

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
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 2rem;
  padding-top: 8rem;
`;

const HeaderSection = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
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
`;

const Title = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 600;
  color: var(--color-text-primary);
  margin: 0;
  text-align: center;
  line-height: 1.2;
`;

const Description = styled(motion.p)`
  font-size: clamp(1.1rem, 2vw, 1.25rem);
  color: var(--color-text-secondary);
  text-align: center;
  max-width: 800px;
  line-height: 1.6;
  margin: 0;
  opacity: 0.9;
`;

const ViewersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  margin: 0 auto;
  width: 100%;
  height: calc(100vh - 500px);
  max-height: 800px;
  padding: 1rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    height: auto;
    padding: 1rem;
  }
`;

const ViewerCard = styled.div`
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  height: 100%;

  &:hover {
    border-color: rgba(145, 71, 255, 0.3);
    background: rgba(0, 0, 0, 0.3);
  }
`;

const ViewerTitle = styled.h3`
  font-size: 1.75rem;
  color: var(--color-text-primary);
  text-align: center;
  font-weight: 500;
  letter-spacing: -0.02em;
  margin: 0;
`;

const ViewerContainer = styled.div`
  position: relative;
  width: 100%;
  flex: 1;
  min-height: 300px;
  border-radius: 16px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;

  & > div {
    width: 100%;
    height: 100%;
  }

  & canvas {
    width: 100% !important;
    height: 100% !important;
    object-fit: contain;
  }
`;

const ViewerControls = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const ControlButton = styled.button`
  padding: 0.75rem 2rem;
  background: rgba(145, 71, 255, 0.1);
  border: 1px solid rgba(145, 71, 255, 0.3);
  border-radius: 12px;
  color: var(--color-text-primary);
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  min-width: 120px;

  &:hover {
    background: rgba(145, 71, 255, 0.2);
    border-color: var(--color-accent);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const SpecsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  width: 100%;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s ease;
  height: 0;
  overflow: hidden;

  &.visible {
    opacity: 1;
    transform: translateY(0);
    height: auto;
    margin-top: 1.5rem;
  }
`;

const SpecItem = styled.div`
  padding: 1rem;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
`;

const SpecLabel = styled.span`
  display: block;
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  margin-bottom: 0.5rem;
`;

const SpecValue = styled.span`
  display: block;
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-accent);
`;

const DualProductViewer = () => {
  const [braceletRotating, setBraceletRotating] = useState(true);
  const [ankletRotating, setAnkletRotating] = useState(true);

  const braceletSpecs = {
    title: "Smart Bracelet",
    specs: [
      { label: "Accuracy", value: "±0.05mm" },
      { label: "Battery", value: "72h" },
      { label: "Weight", value: "45g" },
      { label: "Range", value: "100m" }
    ]
  };

  const ankletSpecs = {
    title: "Smart Anklet",
    specs: [
      { label: "Accuracy", value: "±0.03mm" },
      { label: "Battery", value: "100h" },
      { label: "Weight", value: "55g" },
      { label: "Range", value: "150m" }
    ]
  };

  return (
    <ViewerSection>
      <ContentWrapper>
        <HeaderSection>
          <Overline>Interactive Experience</Overline>
          <Title>Advanced Motion Tracking Solutions</Title>
          <Description>Explore our cutting-edge motion tracking devices through these interactive 3D prototypes.</Description>
        </HeaderSection>
        <ViewersGrid>
          <ViewerCard>
            <ViewerTitle>Smart Bracelet</ViewerTitle>
            <ViewerContainer>
              <ProductViewer3D 
                modelPath="/models/sensor1.glb" 
                isRotating={braceletRotating}
              />
            </ViewerContainer>
            <ViewerControls>
              <ControlButton
                onClick={() => setBraceletRotating(!braceletRotating)}
              >
                {braceletRotating ? 'Pause' : 'Resume'}
              </ControlButton>
            </ViewerControls>
          </ViewerCard>

          <ViewerCard>
            <ViewerTitle>Smart Anklet</ViewerTitle>
            <ViewerContainer>
              <ProductViewer3D 
                modelPath="/models/sensor2.glb" 
                isRotating={ankletRotating}
              />
            </ViewerContainer>
            <ViewerControls>
              <ControlButton
                onClick={() => setAnkletRotating(!ankletRotating)}
              >
                {ankletRotating ? 'Pause' : 'Resume'}
              </ControlButton>
            </ViewerControls>
          </ViewerCard>
        </ViewersGrid>
      </ContentWrapper>
    </ViewerSection>
  );
};

export default DualProductViewer; 