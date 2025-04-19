import React from 'react';
import styled from 'styled-components';
import HeroSection from '../components/HeroSection';
import DualProductViewer from '../components/DualProductViewer';
import ProductShowcase from '../components/ProductShowcase';
import BenefitsSection from '../components/BenefitsSection';
import TechnologySection from '../components/TechnologySection';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomeWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: var(--color-background);
  overflow: hidden;
`;

const MainContent = styled.main`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  padding-top: 80px; /* Account for fixed header */

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const Section = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  background: radial-gradient(
    circle at center,
    var(--color-surface) 0%,
    var(--color-background) 100%
  );

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

const TechSection = styled(Section)`
  background: radial-gradient(
    circle at center,
    var(--color-surface) 0%,
    var(--color-background) 100%
  );
  padding: 0;
  overflow: hidden;
`;

const FooterSection = styled(Section)`
  background: var(--color-background);
  min-height: auto;
  height: auto;
  padding: 2rem 0;

  &::before {
    background: radial-gradient(
      circle at 50% 0%,
      var(--color-accent) 0%,
      transparent 70%
    );
  }
`;

const Home = () => {
  return (
    <HomeWrapper>
      <Header />
      <MainContent>
        <Section>
          <HeroSection />
        </Section>
        <Section>
          <DualProductViewer />
        </Section>
        <Section>
          <ProductShowcase />
        </Section>
        <Section>
          <BenefitsSection />
        </Section>
        <TechSection>
          <TechnologySection />
        </TechSection>
        <FooterSection>
          <Footer />
        </FooterSection>
      </MainContent>
    </HomeWrapper>
  );
};

export default Home; 
