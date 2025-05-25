import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const FooterContainer = styled.footer`
  width: 100%;
  background: transparent;
  backdrop-filter: none;
  border-top: none;
  position: relative;
  padding: 2rem 0 1rem 0;
  z-index: 10;
  margin-top: 0;
  overflow: hidden;
  box-shadow: none;
  
  &::before {
    display: none;
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem 0 1rem 0;
  }
`;

const FooterInner = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

const TopSection = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 2rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-bottom: 1rem;
  }
`;

const BrandSection = styled.div`
  max-width: 350px;

  @media (max-width: 768px) {
    max-width: 100%;
    text-align: center;
  }
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  margin-bottom: 0.75rem;
  display: inline-block;
  letter-spacing: -0.02em;
  transition: all 0.3s ease;
  background: linear-gradient(135deg, #FFFFFF 0%, rgba(255, 255, 255, 0.8) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  &:hover {
    transform: translateY(-2px);
    text-shadow: ${({ theme }) => theme.shadows.textGlow};
  }
`;

const BrandText = styled.p`
  font-size: 0.8rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 0;
  
  @media (max-width: 768px) {
    font-size: 0.75rem;
    max-width: 280px;
    margin: 0 auto;
  }
`;

const LinksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    max-width: 200px;
    margin: 0 auto;
  }
`;

const LinkColumn = styled.div`
  h4 {
    color: ${({ theme }) => theme.components.button.primary.background};
    font-size: 0.7rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 0.5rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 0.25rem;
  }

  a {
    color: ${({ theme }) => theme.colors.textSecondary};
    text-decoration: none;
    font-size: 0.7rem;
    transition: all 0.3s ease;
    display: inline-block;

    &:hover {
      color: ${({ theme }) => theme.colors.text};
      transform: translateX(2px);
    }
  }
  
  @media (max-width: 768px) {
    h4 {
      font-size: 0.65rem;
      margin-bottom: 0.4rem;
    }
    
    a {
      font-size: 0.65rem;
    }
    
    li {
      margin-bottom: 0.2rem;
    }
  }
`;

const BottomSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1rem;
  margin-top: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.textSecondary};

  @media (max-width: 768px) {
    padding-top: 0.75rem;
    margin-top: 0.75rem;
    font-size: 0.65rem;
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