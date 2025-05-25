import React, { useState } from 'react';
import styled from 'styled-components';
import ProductViewer3D from './ProductViewer3D';
import { backgroundStyles } from './ui';
import { motion } from 'framer-motion';
import { 
  UniversalGrid, 
  UniversalCard, 
  UniversalViewerContainer, 
  UniversalSection, 
  UniversalContentWrapper, 
  UniversalHeaderContainer 
} from '../styles/UniversalStyles';

const ViewerSection = styled(UniversalSection)`
  ${backgroundStyles}
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
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
  align-items: center;
  height: 100%;
  gap: 2rem;
  padding-top: 8rem;
`;

const HeaderSection = styled(UniversalHeaderContainer)`
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
  color: ${({ theme }) => theme?.components?.button?.primary?.background || '#6D28D9'};
  margin-bottom: 1.5rem;
  padding: 0.75rem 1.5rem;
  background: ${({ theme }) => theme?.colors?.backgroundSecondary || 'rgba(18, 17, 24, 0.6)'};
  border-radius: 100px;
  border: 1px solid ${({ theme }) => theme?.colors?.border || 'rgba(109, 40, 217, 0.2)'};
  width: fit-content;
`;

const Title = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 600;
  color: ${({ theme }) => theme?.colors?.text || '#FFFFFF'};
  margin: 0;
  text-align: center;
  line-height: 1.2;
`;

const Description = styled.p`
  font-size: clamp(1.1rem, 2vw, 1.25rem);
  color: ${({ theme }) => theme?.colors?.textSecondary || '#B0B0B0'};
  text-align: center;
  max-width: 800px;
  line-height: 1.6;
  margin: 0;
  opacity: 0.9;
`;

const ViewersGrid = styled(UniversalGrid)`
  grid-template-columns: repeat(2, 1fr);
  
  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ViewerCard = styled(UniversalCard)`
  align-items: center;
  gap: 1rem;
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
  }
`;

const ViewerTitle = styled.h3`
  font-size: 1.75rem;
  color: ${({ theme }) => theme?.colors?.text || '#FFFFFF'};
  text-align: center;
  font-weight: 500;
  letter-spacing: -0.02em;
  margin: 0;
`;

const ViewerContainer = styled(UniversalViewerContainer)`
  flex: 1;
  min-height: 300px;
`;

const DualProductViewer = () => {
  return (
    <ViewerSection>
      <ContentWrapper>
        <HeaderSection>
          <Overline
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Advanced Wearables
          </Overline>
          <Title>
            Precision Motion Tracking
          </Title>
          <Description>
            Our wearable sensors deliver unparalleled accuracy and comfort for military personnel in training and field operations.
          </Description>
        </HeaderSection>

        <ViewersGrid>
          <ViewerCard>
            <ViewerTitle>
              Smart Bracelet
            </ViewerTitle>
            <ViewerContainer>
              <ProductViewer3D modelPath="/models/bracelet.glb" isRotating={true} />
            </ViewerContainer>
          </ViewerCard>

          <ViewerCard>
            <ViewerTitle>
              Smart Anklet
            </ViewerTitle>
            <ViewerContainer>
              <ProductViewer3D modelPath="/models/anklet.glb" isRotating={true} />
            </ViewerContainer>
          </ViewerCard>
        </ViewersGrid>
      </ContentWrapper>
    </ViewerSection>
  );
};

export default DualProductViewer; 