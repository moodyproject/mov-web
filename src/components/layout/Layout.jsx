import React, { useState, useEffect, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import MobileMenu from './MobileMenu';

// Enhanced constellation animation keyframes for free-flowing movement
const constellationMove = keyframes`
  0% {
    transform: translateY(0px) translateX(0px) rotate(0deg);
  }
  20% {
    transform: translateY(-25px) translateX(15px) rotate(2deg);
  }
  40% {
    transform: translateY(-10px) translateX(-20px) rotate(-1deg);
  }
  60% {
    transform: translateY(-35px) translateX(25px) rotate(1.5deg);
  }
  80% {
    transform: translateY(-5px) translateX(-10px) rotate(-0.5deg);
  }
  100% {
    transform: translateY(0px) translateX(0px) rotate(0deg);
  }
`;

// Additional floating animation for constellation movement
const constellationFloat = keyframes`
  0% {
    transform: translateY(0px) scale(1) rotate(0deg);
    opacity: 0.8;
  }
  25% {
    transform: translateY(-30px) scale(1.15) rotate(1deg);
    opacity: 1;
  }
  50% {
    transform: translateY(-15px) scale(0.95) rotate(-0.5deg);
    opacity: 0.9;
  }
  75% {
    transform: translateY(-40px) scale(1.1) rotate(1.2deg);
    opacity: 0.95;
  }
  100% {
    transform: translateY(0px) scale(1) rotate(0deg);
    opacity: 0.8;
  }
`;

// Gentle drift animation for continuous movement
const constellationDrift = keyframes`
  0% {
    transform: translateX(0px) translateY(0px);
  }
  33% {
    transform: translateX(20px) translateY(-15px);
  }
  66% {
    transform: translateX(-15px) translateY(-25px);
  }
  100% {
    transform: translateX(0px) translateY(0px);
  }
`;

// Individual star animations with different timings - MUCH FASTER AND MORE DRAMATIC
const starFloat1 = keyframes`
  0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); opacity: 0.8; }
  25% { transform: translate(-40px, -50px) scale(1.3) rotate(90deg); opacity: 1; }
  50% { transform: translate(-60px, -80px) scale(1.5) rotate(180deg); opacity: 0.6; }
  75% { transform: translate(-30px, -40px) scale(1.2) rotate(270deg); opacity: 1; }
`;

const starFloat2 = keyframes`
  0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); opacity: 0.7; }
  25% { transform: translate(50px, -30px) scale(0.8) rotate(-90deg); opacity: 1; }
  50% { transform: translate(80px, -60px) scale(1.4) rotate(-180deg); opacity: 0.5; }
  75% { transform: translate(40px, -20px) scale(1.1) rotate(-270deg); opacity: 0.9; }
`;

const starFloat3 = keyframes`
  0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); opacity: 0.9; }
  25% { transform: translate(-30px, 40px) scale(1.2) rotate(45deg); opacity: 0.6; }
  50% { transform: translate(-50px, 70px) scale(1.6) rotate(90deg); opacity: 1; }
  75% { transform: translate(-20px, 30px) scale(1.3) rotate(135deg); opacity: 0.8; }
`;

// Global synchronized background with enhanced scroll responsiveness (more dramatic color changes)
const GlobalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -10;
  background: ${({ theme }) => theme.colors.background};
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, 
      rgba(10, 9, 15, 0.95) 0%, 
      rgba(109, 40, 217, ${({ $scrollProgress }) => 0.15 + ($scrollProgress * 0.25)}) 30%,
      rgba(139, 92, 246, ${({ $scrollProgress }) => 0.12 + ($scrollProgress * 0.20)}) 50%,
      rgba(109, 40, 217, ${({ $scrollProgress }) => 0.15 + ($scrollProgress * 0.25)}) 70%, 
      rgba(10, 9, 15, 0.95) 100%);
    opacity: ${({ $scrollProgress }) => 0.6 + ($scrollProgress * 0.4)};
    transition: opacity 0.3s ease;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, 
      rgba(109, 40, 217, ${({ $scrollProgress }) => 0.25 + ($scrollProgress * 0.35)}) 0%,
      transparent 70%);
    transition: background 0.3s ease;
  }
`;

// Individual constellation star component
const ConstellationStar = styled.div`
  position: absolute;
  width: ${props => props.$size || '4px'};
  height: ${props => props.$size || '4px'};
  background: ${props => props.$color || 'rgba(167, 139, 250, 0.9)'};
  border-radius: 50%;
  top: ${props => props.$top};
  left: ${props => props.$left};
  animation: ${props => props.$animation} ${props => props.$duration} ease-in-out infinite;
  animation-delay: ${props => props.$delay || '0s'};
  box-shadow: 0 0 ${props => props.$glow || '6px'} ${props => props.$color || 'rgba(167, 139, 250, 0.4)'};
`;

// Constellation pattern with connected dots - FREE FLOWING ANIMATION (enhanced scroll influence for opacity)
const ConstellationLayer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -2;
  pointer-events: none;
  opacity: ${({ $scrollProgress }) => 0.3 + ($scrollProgress * 0.7)};
  transition: opacity 0.3s ease;
`;

// React component for constellation stars
const ConstellationStars = ({ scrollProgress }) => {
  const stars = [
    // CONSTELLATION 1: "THE WARRIOR" - Top Left
    { top: '10%', left: '5%', color: 'rgba(167, 139, 250, 0.9)', size: '8px', glow: '12px', animation: starFloat1, duration: '8s', delay: '0s' },
    { top: '15%', left: '12%', color: 'rgba(109, 40, 217, 0.8)', size: '6px', glow: '10px', animation: starFloat2, duration: '6s', delay: '1s' },
    { top: '8%', left: '18%', color: 'rgba(139, 92, 246, 0.9)', size: '7px', glow: '14px', animation: starFloat3, duration: '10s', delay: '2s' },
    { top: '18%', left: '8%', color: 'rgba(167, 139, 250, 0.7)', size: '5px', glow: '8px', animation: starFloat1, duration: '7s', delay: '3s' },
    { top: '12%', left: '25%', color: 'rgba(109, 40, 217, 0.9)', size: '9px', glow: '16px', animation: starFloat2, duration: '9s', delay: '4s' },
    { top: '5%', left: '15%', color: 'rgba(139, 92, 246, 0.6)', size: '4px', glow: '6px', animation: starFloat3, duration: '8s', delay: '0.5s' },
    { top: '22%', left: '3%', color: 'rgba(167, 139, 250, 0.8)', size: '6px', glow: '10px', animation: starFloat1, duration: '6s', delay: '1.5s' },
    { top: '7%', left: '28%', color: 'rgba(109, 40, 217, 0.7)', size: '7px', glow: '12px', animation: starFloat2, duration: '11s', delay: '2.5s' },
    { top: '20%', left: '20%', color: 'rgba(139, 92, 246, 0.8)', size: '5px', glow: '8px', animation: starFloat3, duration: '9s', delay: '3.5s' },
    { top: '14%', left: '30%', color: 'rgba(167, 139, 250, 0.6)', size: '4px', glow: '6px', animation: starFloat1, duration: '7s', delay: '4.5s' },
    
    // CONSTELLATION 2: "THE GUARDIAN" - Mid Left
    { top: '25%', left: '15%', color: 'rgba(139, 92, 246, 0.7)', size: '6px', glow: '10px', animation: starFloat3, duration: '7s', delay: '0.3s' },
    { top: '30%', left: '22%', color: 'rgba(167, 139, 250, 0.9)', size: '8px', glow: '14px', animation: starFloat1, duration: '9s', delay: '1.2s' },
    { top: '28%', left: '8%', color: 'rgba(109, 40, 217, 0.6)', size: '4px', glow: '6px', animation: starFloat2, duration: '8s', delay: '2.1s' },
    { top: '35%', left: '18%', color: 'rgba(139, 92, 246, 0.8)', size: '7px', glow: '12px', animation: starFloat3, duration: '6s', delay: '3.2s' },
    { top: '32%', left: '28%', color: 'rgba(167, 139, 250, 0.7)', size: '5px', glow: '8px', animation: starFloat1, duration: '10s', delay: '4.1s' },
    { top: '27%', left: '5%', color: 'rgba(109, 40, 217, 0.8)', size: '9px', glow: '16px', animation: starFloat2, duration: '7s', delay: '0.8s' },
    { top: '38%', left: '12%', color: 'rgba(139, 92, 246, 0.6)', size: '4px', glow: '6px', animation: starFloat3, duration: '9s', delay: '1.7s' },
    { top: '33%', left: '25%', color: 'rgba(167, 139, 250, 0.9)', size: '6px', glow: '10px', animation: starFloat1, duration: '8s', delay: '2.8s' },
    { top: '26%', left: '32%', color: 'rgba(109, 40, 217, 0.7)', size: '5px', glow: '8px', animation: starFloat2, duration: '11s', delay: '3.9s' },
    { top: '40%', left: '20%', color: 'rgba(139, 92, 246, 0.8)', size: '7px', glow: '12px', animation: starFloat3, duration: '6s', delay: '5.1s' },
    
    // CONSTELLATION 3: "THE PHOENIX" - Lower Left
    { top: '45%', left: '10%', color: 'rgba(109, 40, 217, 0.7)', size: '8px', glow: '14px', animation: starFloat2, duration: '8s', delay: '0.6s' },
    { top: '50%', left: '20%', color: 'rgba(139, 92, 246, 0.8)', size: '5px', glow: '8px', animation: starFloat3, duration: '9s', delay: '1.4s' },
    { top: '48%', left: '5%', color: 'rgba(167, 139, 250, 0.6)', size: '7px', glow: '12px', animation: starFloat1, duration: '7s', delay: '2.3s' },
    { top: '55%', left: '15%', color: 'rgba(109, 40, 217, 0.9)', size: '6px', glow: '10px', animation: starFloat2, duration: '10s', delay: '3.1s' },
    { top: '52%', left: '25%', color: 'rgba(139, 92, 246, 0.5)', size: '9px', glow: '16px', animation: starFloat3, duration: '6s', delay: '4.2s' },
    { top: '42%', left: '8%', color: 'rgba(167, 139, 250, 0.8)', size: '4px', glow: '6px', animation: starFloat1, duration: '11s', delay: '1.1s' },
    { top: '58%', left: '18%', color: 'rgba(109, 40, 217, 0.7)', size: '7px', glow: '12px', animation: starFloat2, duration: '8s', delay: '2.2s' },
    { top: '47%', left: '28%', color: 'rgba(139, 92, 246, 0.9)', size: '5px', glow: '8px', animation: starFloat3, duration: '9s', delay: '3.3s' },
    { top: '60%', left: '12%', color: 'rgba(167, 139, 250, 0.6)', size: '6px', glow: '10px', animation: starFloat1, duration: '7s', delay: '4.4s' },
    { top: '44%', left: '22%', color: 'rgba(109, 40, 217, 0.8)', size: '4px', glow: '6px', animation: starFloat2, duration: '10s', delay: '5.5s' },
    
    // CONSTELLATION 4: "THE EAGLE" - Top Right
    { top: '15%', left: '70%', color: 'rgba(139, 92, 246, 0.8)', size: '8px', glow: '14px', animation: starFloat1, duration: '9s', delay: '0.2s' },
    { top: '10%', left: '75%', color: 'rgba(167, 139, 250, 0.6)', size: '6px', glow: '10px', animation: starFloat2, duration: '7s', delay: '1.1s' },
    { top: '20%', left: '80%', color: 'rgba(109, 40, 217, 0.9)', size: '9px', glow: '16px', animation: starFloat3, duration: '8s', delay: '2.2s' },
    { top: '12%', left: '85%', color: 'rgba(139, 92, 246, 0.7)', size: '5px', glow: '8px', animation: starFloat1, duration: '10s', delay: '3.1s' },
    { top: '25%', left: '78%', color: 'rgba(167, 139, 250, 0.8)', size: '7px', glow: '12px', animation: starFloat2, duration: '6s', delay: '4.3s' },
    { top: '8%', left: '72%', color: 'rgba(109, 40, 217, 0.6)', size: '4px', glow: '6px', animation: starFloat3, duration: '11s', delay: '0.9s' },
    { top: '18%', left: '88%', color: 'rgba(139, 92, 246, 0.9)', size: '7px', glow: '12px', animation: starFloat1, duration: '7s', delay: '1.8s' },
    { top: '22%', left: '73%', color: 'rgba(167, 139, 250, 0.7)', size: '5px', glow: '8px', animation: starFloat2, duration: '9s', delay: '2.7s' },
    { top: '6%', left: '82%', color: 'rgba(109, 40, 217, 0.8)', size: '6px', glow: '10px', animation: starFloat3, duration: '8s', delay: '3.6s' },
    { top: '28%', left: '85%', color: 'rgba(139, 92, 246, 0.6)', size: '4px', glow: '6px', animation: starFloat1, duration: '10s', delay: '4.7s' },
    
    // CONSTELLATION 5: "THE CROWN" - Center
    { top: '40%', left: '45%', color: 'rgba(109, 40, 217, 0.8)', size: '9px', glow: '18px', animation: starFloat3, duration: '8s', delay: '0s' },
    { top: '45%', left: '50%', color: 'rgba(139, 92, 246, 0.9)', size: '7px', glow: '14px', animation: starFloat1, duration: '7s', delay: '1.2s' },
    { top: '42%', left: '40%', color: 'rgba(167, 139, 250, 0.7)', size: '8px', glow: '16px', animation: starFloat2, duration: '9s', delay: '2.1s' },
    { top: '48%', left: '55%', color: 'rgba(109, 40, 217, 0.6)', size: '5px', glow: '8px', animation: starFloat3, duration: '6s', delay: '3.3s' },
    { top: '44%', left: '48%', color: 'rgba(139, 92, 246, 0.8)', size: '6px', glow: '12px', animation: starFloat1, duration: '10s', delay: '4.1s' },
    { top: '38%', left: '52%', color: 'rgba(167, 139, 250, 0.5)', size: '7px', glow: '14px', animation: starFloat2, duration: '8s', delay: '0.7s' },
    { top: '52%', left: '42%', color: 'rgba(109, 40, 217, 0.9)', size: '8px', glow: '16px', animation: starFloat3, duration: '11s', delay: '1.6s' },
    { top: '46%', left: '58%', color: 'rgba(139, 92, 246, 0.7)', size: '4px', glow: '6px', animation: starFloat1, duration: '7s', delay: '2.8s' },
    { top: '36%', left: '47%', color: 'rgba(167, 139, 250, 0.8)', size: '6px', glow: '10px', animation: starFloat2, duration: '9s', delay: '3.9s' },
    { top: '50%', left: '53%', color: 'rgba(109, 40, 217, 0.6)', size: '5px', glow: '8px', animation: starFloat3, duration: '8s', delay: '5.2s' },
    
    // CONSTELLATION 6: "THE DRAGON" - Bottom Right
    { top: '65%', left: '70%', color: 'rgba(167, 139, 250, 0.5)', size: '6px', glow: '10px', animation: starFloat2, duration: '7s', delay: '0.8s' },
    { top: '70%', left: '75%', color: 'rgba(109, 40, 217, 0.7)', size: '8px', glow: '14px', animation: starFloat3, duration: '9s', delay: '1.7s' },
    { top: '68%', left: '80%', color: 'rgba(139, 92, 246, 0.6)', size: '5px', glow: '8px', animation: starFloat1, duration: '8s', delay: '2.6s' },
    { top: '75%', left: '85%', color: 'rgba(167, 139, 250, 0.8)', size: '9px', glow: '16px', animation: starFloat2, duration: '6s', delay: '3.4s' },
    { top: '72%', left: '78%', color: 'rgba(109, 40, 217, 0.9)', size: '7px', glow: '12px', animation: starFloat3, duration: '10s', delay: '4.5s' },
    { top: '62%', left: '73%', color: 'rgba(139, 92, 246, 0.8)', size: '4px', glow: '6px', animation: starFloat1, duration: '11s', delay: '1.3s' },
    { top: '78%', left: '82%', color: 'rgba(167, 139, 250, 0.6)', size: '7px', glow: '12px', animation: starFloat2, duration: '7s', delay: '2.4s' },
    { top: '66%', left: '88%', color: 'rgba(109, 40, 217, 0.7)', size: '5px', glow: '8px', animation: starFloat3, duration: '9s', delay: '3.2s' },
    { top: '80%', left: '76%', color: 'rgba(139, 92, 246, 0.8)', size: '6px', glow: '10px', animation: starFloat1, duration: '8s', delay: '4.1s' },
    { top: '64%', left: '92%', color: 'rgba(167, 139, 250, 0.9)', size: '4px', glow: '6px', animation: starFloat2, duration: '10s', delay: '5.3s' },
    
    // CONSTELLATION 7: "THE ARCHER" - Mid Right
    { top: '35%', left: '75%', color: 'rgba(139, 92, 246, 0.7)', size: '7px', glow: '12px', animation: starFloat1, duration: '8s', delay: '0.4s' },
    { top: '40%', left: '82%', color: 'rgba(167, 139, 250, 0.6)', size: '6px', glow: '10px', animation: starFloat2, duration: '9s', delay: '1.5s' },
    { top: '38%', left: '68%', color: 'rgba(109, 40, 217, 0.8)', size: '8px', glow: '14px', animation: starFloat3, duration: '7s', delay: '2.3s' },
    { top: '43%', left: '85%', color: 'rgba(139, 92, 246, 0.9)', size: '5px', glow: '8px', animation: starFloat1, duration: '10s', delay: '3.4s' },
    { top: '32%', left: '78%', color: 'rgba(167, 139, 250, 0.7)', size: '9px', glow: '16px', animation: starFloat2, duration: '6s', delay: '4.2s' },
    { top: '46%', left: '72%', color: 'rgba(109, 40, 217, 0.6)', size: '4px', glow: '6px', animation: starFloat3, duration: '11s', delay: '1.1s' },
    { top: '30%', left: '88%', color: 'rgba(139, 92, 246, 0.8)', size: '6px', glow: '10px', animation: starFloat1, duration: '8s', delay: '2.2s' },
    { top: '48%', left: '80%', color: 'rgba(167, 139, 250, 0.5)', size: '7px', glow: '12px', animation: starFloat2, duration: '9s', delay: '3.3s' },
    
    // CONSTELLATION 8: "THE SERPENT" - Bottom Center
    { top: '75%', left: '35%', color: 'rgba(109, 40, 217, 0.8)', size: '6px', glow: '10px', animation: starFloat3, duration: '9s', delay: '0.6s' },
    { top: '80%', left: '45%', color: 'rgba(139, 92, 246, 0.6)', size: '8px', glow: '14px', animation: starFloat1, duration: '8s', delay: '1.8s' },
    { top: '78%', left: '25%', color: 'rgba(167, 139, 250, 0.9)', size: '5px', glow: '8px', animation: starFloat2, duration: '11s', delay: '2.7s' },
    { top: '85%', left: '40%', color: 'rgba(109, 40, 217, 0.7)', size: '7px', glow: '12px', animation: starFloat3, duration: '7s', delay: '3.5s' },
    { top: '72%', left: '50%', color: 'rgba(139, 92, 246, 0.8)', size: '6px', glow: '10px', animation: starFloat1, duration: '10s', delay: '4.6s' },
    { top: '82%', left: '30%', color: 'rgba(167, 139, 250, 0.6)', size: '4px', glow: '6px', animation: starFloat2, duration: '8s', delay: '1.4s' },
    { top: '76%', left: '55%', color: 'rgba(109, 40, 217, 0.9)', size: '9px', glow: '16px', animation: starFloat3, duration: '9s', delay: '2.5s' },
    { top: '88%', left: '35%', color: 'rgba(139, 92, 246, 0.7)', size: '5px', glow: '8px', animation: starFloat1, duration: '6s', delay: '3.6s' },
    
    // SCATTERED COSMIC DUST - Additional 30+ stars for richness
    { top: '60%', left: '30%', color: 'rgba(139, 92, 246, 0.7)', size: '4px', glow: '6px', animation: starFloat1, duration: '7s', delay: '1.6s' },
    { top: '35%', left: '65%', color: 'rgba(167, 139, 250, 0.6)', size: '6px', glow: '10px', animation: starFloat2, duration: '9s', delay: '2.8s' },
    { top: '80%', left: '20%', color: 'rgba(109, 40, 217, 0.8)', size: '5px', glow: '8px', animation: starFloat3, duration: '8s', delay: '3.9s' },
    { top: '20%', left: '50%', color: 'rgba(139, 92, 246, 0.5)', size: '7px', glow: '12px', animation: starFloat1, duration: '6s', delay: '4.7s' },
    { top: '55%', left: '60%', color: 'rgba(167, 139, 250, 0.9)', size: '5px', glow: '8px', animation: starFloat2, duration: '10s', delay: '5.8s' },
    { top: '25%', left: '35%', color: 'rgba(109, 40, 217, 0.6)', size: '4px', glow: '6px', animation: starFloat3, duration: '11s', delay: '0.9s' },
    { top: '65%', left: '15%', color: 'rgba(139, 92, 246, 0.8)', size: '6px', glow: '10px', animation: starFloat1, duration: '7s', delay: '2.1s' },
    { top: '15%', left: '60%', color: 'rgba(167, 139, 250, 0.7)', size: '3px', glow: '4px', animation: starFloat2, duration: '9s', delay: '3.4s' },
    { top: '85%', left: '60%', color: 'rgba(109, 40, 217, 0.9)', size: '5px', glow: '8px', animation: starFloat3, duration: '8s', delay: '4.2s' },
    { top: '5%', left: '45%', color: 'rgba(139, 92, 246, 0.6)', size: '4px', glow: '6px', animation: starFloat1, duration: '10s', delay: '5.3s' },
    { top: '50%', left: '8%', color: 'rgba(167, 139, 250, 0.8)', size: '7px', glow: '12px', animation: starFloat2, duration: '6s', delay: '1.4s' },
    { top: '30%', left: '90%', color: 'rgba(109, 40, 217, 0.7)', size: '3px', glow: '4px', animation: starFloat3, duration: '11s', delay: '2.6s' },
    { top: '90%', left: '30%', color: 'rgba(139, 92, 246, 0.5)', size: '6px', glow: '10px', animation: starFloat1, duration: '7s', delay: '3.8s' },
    { top: '10%', left: '35%', color: 'rgba(167, 139, 250, 0.9)', size: '4px', glow: '6px', animation: starFloat2, duration: '9s', delay: '4.9s' },
    { top: '70%', left: '5%', color: 'rgba(109, 40, 217, 0.8)', size: '5px', glow: '8px', animation: starFloat3, duration: '8s', delay: '6.1s' },
    { top: '40%', left: '25%', color: 'rgba(139, 92, 246, 0.7)', size: '3px', glow: '4px', animation: starFloat1, duration: '10s', delay: '1.7s' },
    
    // EDGE STARS - Perimeter enhancement
    { top: '3%', left: '50%', color: 'rgba(167, 139, 250, 0.6)', size: '4px', glow: '6px', animation: starFloat2, duration: '8s', delay: '2.3s' },
    { top: '97%', left: '50%', color: 'rgba(109, 40, 217, 0.7)', size: '5px', glow: '8px', animation: starFloat3, duration: '9s', delay: '3.7s' },
    { top: '50%', left: '2%', color: 'rgba(139, 92, 246, 0.8)', size: '6px', glow: '10px', animation: starFloat1, duration: '7s', delay: '4.1s' },
    { top: '50%', left: '98%', color: 'rgba(167, 139, 250, 0.9)', size: '4px', glow: '6px', animation: starFloat2, duration: '10s', delay: '5.5s' },
    { top: '8%', left: '8%', color: 'rgba(109, 40, 217, 0.6)', size: '3px', glow: '4px', animation: starFloat3, duration: '11s', delay: '1.2s' },
    { top: '92%', left: '92%', color: 'rgba(139, 92, 246, 0.7)', size: '5px', glow: '8px', animation: starFloat1, duration: '6s', delay: '2.8s' },
    { top: '8%', left: '92%', color: 'rgba(167, 139, 250, 0.8)', size: '4px', glow: '6px', animation: starFloat2, duration: '8s', delay: '3.9s' },
    { top: '92%', left: '8%', color: 'rgba(109, 40, 217, 0.9)', size: '6px', glow: '10px', animation: starFloat3, duration: '9s', delay: '4.6s' },
    
    // MICRO STARS - Tiny twinkling details
    { top: '23%', left: '43%', color: 'rgba(139, 92, 246, 0.5)', size: '2px', glow: '3px', animation: starFloat1, duration: '5s', delay: '1.1s' },
    { top: '67%', left: '37%', color: 'rgba(167, 139, 250, 0.6)', size: '2px', glow: '3px', animation: starFloat2, duration: '6s', delay: '2.4s' },
    { top: '41%', left: '83%', color: 'rgba(109, 40, 217, 0.7)', size: '2px', glow: '3px', animation: starFloat3, duration: '7s', delay: '3.2s' },
    { top: '16%', left: '77%', color: 'rgba(139, 92, 246, 0.4)', size: '2px', glow: '3px', animation: starFloat1, duration: '8s', delay: '4.8s' },
    { top: '84%', left: '23%', color: 'rgba(167, 139, 250, 0.5)', size: '2px', glow: '3px', animation: starFloat2, duration: '5s', delay: '5.7s' },
    { top: '29%', left: '17%', color: 'rgba(109, 40, 217, 0.6)', size: '2px', glow: '3px', animation: starFloat3, duration: '6s', delay: '6.3s' },
    { top: '73%', left: '63%', color: 'rgba(139, 92, 246, 0.7)', size: '2px', glow: '3px', animation: starFloat1, duration: '7s', delay: '1.9s' },
    { top: '57%', left: '47%', color: 'rgba(167, 139, 250, 0.8)', size: '2px', glow: '3px', animation: starFloat2, duration: '8s', delay: '2.7s' },
  ];

  return (
    <ConstellationLayer $scrollProgress={scrollProgress}>
      {/* Individual stars */}
      {stars.map((star, index) => (
        <ConstellationStar
          key={`star-${index}`}
          $top={star.top}
          $left={star.left}
          $color={star.color}
          $size={star.size}
          $glow={star.glow}
          $animation={star.animation}
          $duration={star.duration}
          $delay={star.delay}
        />
      ))}
    </ConstellationLayer>
  );
};

const Main = styled.main`
  flex: 1;
  position: relative;
  z-index: 1;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 80px);
  background: transparent;
`;

// Footer styling - make it flush with the page
const FlushFooter = styled(Footer)`
  position: relative;
  z-index: 10;
  margin-top: 0;
  background: transparent;
  border-top: none;
`;

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  background: transparent;
  overflow-x: hidden;
`;

const features = [
  { 
    name: 'Data Analytics', 
    path: '/data-analytics',
    description: 'Advanced performance metrics and real-time insights'
  },
  { 
    name: 'Training Programs', 
    path: '/training-programs',
    description: 'AI-powered training optimization'
  },
  { 
    name: 'Command Center', 
    path: '/command-center',
    description: 'Centralized monitoring and control'
  }
];

const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Simplified scroll handler - only for color changes
  const throttledScrollHandler = useCallback(() => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = Math.min(scrollTop / Math.max(docHeight, 1), 1);
    setScrollProgress(scrollPercent);
  }, []);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          throttledScrollHandler();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Use passive listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial call
    throttledScrollHandler();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [throttledScrollHandler]);
  
  return (
    <>
      <GlobalBackground $scrollProgress={scrollProgress} />
      <ConstellationStars scrollProgress={scrollProgress} />
      <LayoutContainer>
        <Header 
          onMobileMenuOpen={() => setIsMobileMenuOpen(true)}
          scrollProgress={scrollProgress}
        />
        <Main>
          <Outlet />
          {!isHomePage && <FlushFooter />}
        </Main>
        
        <AnimatePresence>
          {isMobileMenuOpen && (
            <MobileMenu 
              closeMenu={() => setIsMobileMenuOpen(false)} 
              features={features}
            />
          )}
        </AnimatePresence>
      </LayoutContainer>
    </>
  );
};

export default Layout;