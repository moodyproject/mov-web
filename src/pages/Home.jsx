import React from 'react';
import styled from 'styled-components';
import HeroSection from '../components/HeroSection';
import DualProductViewer from '../components/DualProductViewer';
import ProductShowcase from '../components/ProductShowcase';
import BenefitsSection from '../components/BenefitsSection';
import TechnologySection from '../components/TechnologySection';
import PerformanceMetrics from '../components/sections/PerformanceMetrics';
import Footer from '../components/layout/Footer';
import { backgroundStyles } from '../components/ui';

const HomeWrapper = styled.div`
  ${backgroundStyles}
  position: relative;
  width: 100%;
  min-height: 100vh;
`;

const Spacer = styled.div`
  height: 4rem;
  
  @media (max-width: 768px) {
    height: 2rem;
  }
`;

const Home = () => {
  return (
    <HomeWrapper>
      <HeroSection />
      <DualProductViewer />
      <ProductShowcase />
      <PerformanceMetrics />
      <BenefitsSection />
      <TechnologySection />
      <Spacer />
      <Footer />
    </HomeWrapper>
  );
};

export default Home; 
