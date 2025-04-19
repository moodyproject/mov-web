import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const FooterContainer = styled.footer`
  width: 100%;
  background: radial-gradient(
    circle at center,
    var(--color-surface) 0%,
    var(--color-background) 100%
  );
  position: relative;
  padding: 3rem 0 0 0;
  border-top: 1px solid var(--color-border);
  z-index: 1;
  margin-top: auto;

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
    opacity: 0.05;
    z-index: 0;
    pointer-events: none;
  }
`;

const FooterInner = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 2rem 1.5rem;
  position: relative;
  z-index: 2;
`;

const TopSection = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 2fr;
  gap: 3rem;
  margin-bottom: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const BrandSection = styled.div`
  max-width: 400px;

  @media (max-width: 1024px) {
    max-width: 100%;
  }
`;

const Logo = styled(Link)`
  font-size: 1.75rem;
  font-weight: 600;
  color: var(--color-text-primary);
  text-decoration: none;
  margin-bottom: 1rem;
  display: inline-block;
  letter-spacing: -0.02em;
  transition: all 0.3s ease;

  &:hover {
    color: var(--color-accent);
  }
`;

const BrandText = styled.p`
  font-size: 0.875rem;
  line-height: 1.6;
  color: var(--color-text-secondary);
  margin-bottom: 1.5rem;
`;

const LinksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const LinkColumn = styled.div`
  h4 {
    color: var(--color-accent);
    font-size: 0.75rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 0.75rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 0.5rem;
  }

  a {
    color: var(--color-text-secondary);
    text-decoration: none;
    font-size: 0.75rem;
    transition: all 0.3s ease;
    display: inline-block;

    &:hover {
      color: var(--color-text-primary);
      transform: translateX(4px);
    }
  }
`;

const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.5rem;
  margin-top: 1.5rem;
  border-top: 1px solid var(--color-border);
  font-size: 0.75rem;
  color: var(--color-text-secondary);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.75rem;
    text-align: center;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const SocialIcon = styled(motion.a)`
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-secondary);
  font-size: 0.875rem;
  border: 1px solid var(--color-border);
  border-radius: 50%;
  transition: all 0.3s ease;
  background: rgba(17, 17, 17, 0.6);

  &:hover {
    color: var(--color-accent);
    border-color: var(--color-accent);
    transform: translateY(-2px);
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterInner>
        <TopSection>
          <BrandSection>
            <Logo to="/">mov</Logo>
            <BrandText>
              Revolutionizing military training with advanced motion tracking and real-time analytics. 
              Empowering tactical excellence through cutting-edge technology.
            </BrandText>
          </BrandSection>
          <LinksGrid>
            <LinkColumn>
              <h4>Platform</h4>
              <ul>
                <li><Link to="/data-analytics">Data Analytics</Link></li>
                <li><Link to="/training-programs">Training Programs</Link></li>
                <li><Link to="/command-center">Command Center</Link></li>
              </ul>
            </LinkColumn>
            <LinkColumn>
              <h4>Company</h4>
              <ul>
                <li><Link to="/about">About Us</Link></li>
              </ul>
            </LinkColumn>
            <LinkColumn>
              <h4>Resources</h4>
              <ul>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </LinkColumn>
          </LinksGrid>
        </TopSection>
        <BottomSection>
          <div>&copy; {new Date().getFullYear()} mov. All rights reserved.</div>
        </BottomSection>
      </FooterInner>
    </FooterContainer>
  );
};

export default Footer; 