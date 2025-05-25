import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    --scrollbar-width: 8px;
    --font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    --font-display: 'SF Pro Display', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    --font-mono: 'SF Mono', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
    scrollbar-width: none;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: var(--font-primary);
    line-height: 1.6;
    overflow-x: hidden;
    width: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    letter-spacing: -0.01em;
    font-feature-settings: 'kern' 1, 'liga' 1, 'calt' 1;
  }

  /* Custom Scrollbar */
  ::-webkit-scrollbar {
    display: none;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.background};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.components.button.primary.background};
    border-radius: calc(var(--scrollbar-width) / 2);
    
    &:hover {
      background: ${({ theme }) => theme.components.button.primary.hover || theme.components.button.primary.background};
    }
  }

  /* Selection */
  ::selection {
    background: ${({ theme }) => `rgba(${parseInt(theme.components.button.primary.background.slice(1, 3), 16)}, ${parseInt(theme.components.button.primary.background.slice(3, 5), 16)}, ${parseInt(theme.components.button.primary.background.slice(5, 7), 16)}, 0.4)`};
    color: ${({ theme }) => theme.colors.text};
  }

  /* Enhanced Typography */
  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 700;
    letter-spacing: -0.025em;
    line-height: 1.2;
    margin-bottom: 1rem;
    font-family: var(--font-display);
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
    font-feature-settings: 'kern' 1, 'liga' 1, 'calt' 1;
  }

  h1 {
    font-size: clamp(2.5rem, 5vw, 4.5rem);
    font-weight: 800;
    text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
    letter-spacing: -0.03em;
  }

  h2 {
    font-size: clamp(2rem, 4vw, 3.5rem);
    font-weight: 700;
    text-shadow: 0 3px 12px rgba(0, 0, 0, 0.4);
  }

  h3 {
    font-size: clamp(1.5rem, 3vw, 2.5rem);
    font-weight: 600;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  }

  h4 {
    font-size: clamp(1.25rem, 2vw, 1.75rem);
    font-weight: 600;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }

  h5 {
    font-size: 1.25rem;
    font-weight: 600;
    text-shadow: 0 1px 6px rgba(0, 0, 0, 0.3);
  }

  h6 {
    font-size: 1.125rem;
    font-weight: 600;
    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  }

  p {
    color: ${({ theme }) => theme.colors.textSecondary};
    line-height: 1.7;
    margin-bottom: 1rem;
    font-size: clamp(1rem, 1.5vw, 1.125rem);
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    font-weight: 400;
    font-feature-settings: 'kern' 1, 'liga' 1;
  }

  a {
    color: ${({ theme }) => theme.components.button.primary.background};
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;

    &:hover {
      color: ${({ theme }) => theme.components.button.primary.hover || theme.components.button.primary.background};
      transform: translateY(-1px);
    }
    
    &:focus-visible {
      outline: 2px solid ${({ theme }) => theme.components.button.primary.background};
      outline-offset: 2px;
      border-radius: 4px;
    }
  }

  /* Enhanced Common Components with Glass Morphism */
  .category-badge {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background: rgba(109, 40, 217, 0.15);
    backdrop-filter: blur(15px);
    border: 1px solid rgba(109, 40, 217, 0.25);
    border-radius: 100px;
    margin-bottom: 1.5rem;
    font-size: 0.875rem;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.components.button.primary.background};
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 4px 15px rgba(109, 40, 217, 0.1);
    
    &:hover {
      background: rgba(109, 40, 217, 0.25);
      border-color: rgba(109, 40, 217, 0.4);
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(109, 40, 217, 0.3);
    }
  }

  .overline {
    display: inline-block;
    text-transform: uppercase;
    font-size: 0.875rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    color: ${({ theme }) => theme.components.button.primary.background};
    padding: 0.75rem 1.5rem;
    background: rgba(109, 40, 217, 0.15);
    backdrop-filter: blur(15px);
    border: 1px solid rgba(109, 40, 217, 0.25);
    border-radius: 100px;
    margin-bottom: 1.5rem;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 4px 15px rgba(109, 40, 217, 0.1);
    
    &:hover {
      background: rgba(109, 40, 217, 0.25);
      border-color: rgba(109, 40, 217, 0.4);
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(109, 40, 217, 0.3);
    }
  }

  .card {
    background: rgba(18, 17, 24, 0.6);
    backdrop-filter: blur(25px);
    border: 1px solid rgba(109, 40, 217, 0.15);
    border-radius: 24px;
    padding: 2rem;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    box-shadow: 0 8px 20px rgba(109, 40, 217, 0.08);
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, rgba(109, 40, 217, 0.08) 0%, rgba(139, 92, 246, 0.04) 50%, transparent 100%);
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    &:hover {
      transform: translateY(-8px) scale(1.02);
      background: rgba(18, 17, 24, 0.8);
      box-shadow: 0 20px 40px rgba(109, 40, 217, 0.25);
      border-color: rgba(109, 40, 217, 0.3);
      
      &::before {
        opacity: 1;
      }
    }
  }

  /* Glass Container for Showcases */
  .glass-container {
    background: rgba(10, 9, 15, 0.5);
    backdrop-filter: blur(25px);
    border: 1px solid rgba(109, 40, 217, 0.2);
    border-radius: 24px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    box-shadow: 0 10px 25px rgba(109, 40, 217, 0.1);
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, rgba(109, 40, 217, 0.1) 0%, rgba(139, 92, 246, 0.05) 50%, transparent 100%);
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    &:hover {
      background: rgba(10, 9, 15, 0.7);
      border-color: rgba(109, 40, 217, 0.35);
      box-shadow: 0 15px 35px rgba(109, 40, 217, 0.2);
      
      &::before {
        opacity: 1;
      }
    }
  }

  /* Glass Panel for Sections */
  .glass-panel {
    background: rgba(18, 17, 24, 0.4);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(109, 40, 217, 0.12);
    border-radius: 20px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 6px 18px rgba(109, 40, 217, 0.06);
    
    &:hover {
      background: rgba(18, 17, 24, 0.6);
      border-color: rgba(109, 40, 217, 0.2);
      box-shadow: 0 8px 22px rgba(109, 40, 217, 0.12);
    }
  }

  /* Enhanced Header and Footer Transparency */
  .header-transparent {
    background: rgba(10, 9, 15, 0.3);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(109, 40, 217, 0.1);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    
    &:hover {
      background: rgba(10, 9, 15, 0.5);
      border-bottom-color: rgba(109, 40, 217, 0.2);
    }
  }

  .footer-transparent {
    background: rgba(10, 9, 15, 0.4);
    backdrop-filter: blur(20px);
    border-top: 1px solid rgba(109, 40, 217, 0.1);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  /* Enhanced Section Backgrounds */
  .section-transparent {
    background: rgba(18, 17, 24, 0.2);
    backdrop-filter: blur(15px);
    border: 1px solid rgba(109, 40, 217, 0.08);
    border-radius: 20px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    
    &:hover {
      background: rgba(18, 17, 24, 0.35);
      border-color: rgba(109, 40, 217, 0.15);
    }
  }

  /* Enhanced Product Viewer Containers */
  .viewer-container {
    background: rgba(10, 9, 15, 0.4);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(109, 40, 217, 0.15);
    border-radius: 20px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 8px 20px rgba(109, 40, 217, 0.1);
    
    &:hover {
      background: rgba(10, 9, 15, 0.6);
      border-color: rgba(109, 40, 217, 0.25);
      box-shadow: 0 12px 30px rgba(109, 40, 217, 0.15);
    }
  }

  /* Enhanced Chart and Graph Containers */
  .chart-container {
    background: rgba(18, 17, 24, 0.5);
    backdrop-filter: blur(25px);
    border: 1px solid rgba(109, 40, 217, 0.2);
    border-radius: 20px;
    padding: 1.5rem;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 10px 25px rgba(109, 40, 217, 0.1);
    
    &:hover {
      background: rgba(18, 17, 24, 0.7);
      border-color: rgba(109, 40, 217, 0.3);
      box-shadow: 0 15px 35px rgba(109, 40, 217, 0.15);
    }
  }

  /* Enhanced Navigation Elements */
  .nav-transparent {
    background: rgba(18, 17, 24, 0.3);
    backdrop-filter: blur(15px);
    border: 1px solid rgba(109, 40, 217, 0.1);
    border-radius: 12px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    
    &:hover {
      background: rgba(18, 17, 24, 0.5);
      border-color: rgba(109, 40, 217, 0.2);
    }
  }

  /* Enhanced Modal and Overlay Backgrounds */
  .modal-transparent {
    background: rgba(10, 9, 15, 0.8);
    backdrop-filter: blur(30px);
    border: 1px solid rgba(109, 40, 217, 0.2);
    border-radius: 24px;
    box-shadow: 0 20px 50px rgba(109, 40, 217, 0.2);
  }

  .overlay-transparent {
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(10px);
  }

  /* Buttons */
  button {
    font-family: var(--font-primary);
    border: none;
    outline: none;
    cursor: pointer;
    transition: ${({ theme }) => theme.transitions.standard};
    background: ${({ theme }) => theme.components.button.primary.background};
    color: ${({ theme }) => theme.components.button.primary.text};
    border-radius: ${({ theme }) => theme.radius.medium};
    padding: 0.75rem 1.5rem;
    font-weight: 500;
    font-size: 1rem;

    &:hover {
      background: ${({ theme }) => theme.components.button.primary.hover || theme.components.button.primary.background};
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(0);
    }

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
      transform: none;
    }
  }

  /* Inputs */
  input, textarea, select {
    background: ${({ theme }) => theme.colors.backgroundTertiary};
    border: 1px solid ${({ theme }) => theme.colors.border};
    color: ${({ theme }) => theme.colors.text};
    border-radius: ${({ theme }) => theme.radius.medium};
    padding: 0.75rem 1rem;
    transition: ${({ theme }) => theme.transitions.standard};
    font-family: var(--font-primary);
    font-size: 1rem;

    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.components.button.primary.background};
      background: ${({ theme }) => theme.colors.backgroundTertiary};
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors.textSecondary};
      opacity: 0.7;
    }
  }

  /* Images */
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* Container */
  .container {
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 2rem;

    @media (max-width: 768px) {
      padding: 0 1.5rem;
    }
  }

  /* Grid & Flex Layouts */
  .grid {
    display: grid;
    gap: 1.5rem;
  }

  .flex {
    display: flex;
  }

  .flex-col {
    flex-direction: column;
  }

  .items-center {
    align-items: center;
  }

  .justify-center {
    justify-content: center;
  }

  .gap-sm {
    gap: 0.5rem;
  }

  .gap-md {
    gap: 1rem;
  }

  .gap-lg {
    gap: 1.5rem;
  }

  .gap-xl {
    gap: 2rem;
  }

  /* Spacing */
  .mt-auto {
    margin-top: auto;
  }

  .text-center {
    text-align: center;
  }

  /* Enhanced Animations with Scroll Effects */
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideUp {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slideInLeft {
    from {
      transform: translateX(-50px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slideInRight {
    from {
      transform: translateX(50px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes scaleIn {
    from {
      transform: scale(0.8);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.05);
      opacity: 0.8;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
  
  @keyframes subtleFloat {
    0% {
      transform: translateY(0) rotate(0deg);
    }
    33% {
      transform: translateY(-15px) rotate(2deg);
    }
    66% {
      transform: translateY(10px) rotate(-1deg);
    }
    100% {
      transform: translateY(0) rotate(0deg);
    }
  }
  
  @keyframes gradientShift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  
  @keyframes colorShift {
    0% {
      filter: hue-rotate(0deg) brightness(1);
    }
    25% {
      filter: hue-rotate(10deg) brightness(1.1);
    }
    50% {
      filter: hue-rotate(20deg) brightness(1.2);
    }
    75% {
      filter: hue-rotate(10deg) brightness(1.1);
    }
    100% {
      filter: hue-rotate(0deg) brightness(1);
    }
  }

  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }

  @keyframes glow {
    0%, 100% {
      box-shadow: 0 0 5px rgba(109, 40, 217, 0.2);
    }
    50% {
      box-shadow: 0 0 20px rgba(109, 40, 217, 0.4), 0 0 30px rgba(109, 40, 217, 0.2);
    }
  }

  @keyframes morphBackground {
    0% {
      border-radius: 24px;
      transform: rotate(0deg);
    }
    25% {
      border-radius: 32px 16px;
      transform: rotate(1deg);
    }
    50% {
      border-radius: 16px 32px;
      transform: rotate(0deg);
    }
    75% {
      border-radius: 28px 20px;
      transform: rotate(-1deg);
    }
    100% {
      border-radius: 24px;
      transform: rotate(0deg);
    }
  }

  @keyframes parallaxFloat {
    0% {
      transform: translateY(0) translateX(0) rotate(0deg);
    }
    25% {
      transform: translateY(-10px) translateX(5px) rotate(2deg);
    }
    50% {
      transform: translateY(-5px) translateX(-3px) rotate(0deg);
    }
    75% {
      transform: translateY(-15px) translateX(2px) rotate(-1deg);
    }
    100% {
      transform: translateY(0) translateX(0) rotate(0deg);
    }
  }
  
  @keyframes energyPulse {
    0% {
      transform: scale(1) rotate(0deg);
      opacity: 0.3;
      filter: hue-rotate(0deg);
    }
    25% {
      transform: scale(1.2) rotate(90deg);
      opacity: 0.6;
      filter: hue-rotate(30deg);
    }
    50% {
      transform: scale(0.8) rotate(180deg);
      opacity: 0.4;
      filter: hue-rotate(60deg);
    }
    75% {
      transform: scale(1.1) rotate(270deg);
      opacity: 0.7;
      filter: hue-rotate(30deg);
    }
    100% {
      transform: scale(1) rotate(360deg);
      opacity: 0.3;
      filter: hue-rotate(0deg);
    }
  }

  @keyframes constellationMove {
    0% {
      transform: translateY(0) translateX(0) rotate(0deg) scale(1);
    }
    20% {
      transform: translateY(-15px) translateX(10px) rotate(72deg) scale(1.1);
    }
    40% {
      transform: translateY(-5px) translateX(-8px) rotate(144deg) scale(0.9);
    }
    60% {
      transform: translateY(-20px) translateX(12px) rotate(216deg) scale(1.05);
    }
    80% {
      transform: translateY(-8px) translateX(-5px) rotate(288deg) scale(0.95);
    }
    100% {
      transform: translateY(0) translateX(0) rotate(360deg) scale(1);
    }
  }

  @keyframes liquidMotion {
    0% {
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
      transform: rotate(0deg) scale(1);
    }
    25% {
      border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
      transform: rotate(90deg) scale(1.1);
    }
    50% {
      border-radius: 50% 40% 60% 30% / 70% 50% 40% 50%;
      transform: rotate(180deg) scale(0.9);
    }
    75% {
      border-radius: 40% 70% 50% 60% / 40% 70% 60% 30%;
      transform: rotate(270deg) scale(1.05);
    }
    100% {
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
      transform: rotate(360deg) scale(1);
    }
  }

  @keyframes nebulaSwirl {
    0% {
      transform: rotate(0deg) scale(1) skew(0deg);
      filter: hue-rotate(0deg) brightness(1);
    }
    33% {
      transform: rotate(120deg) scale(1.2) skew(5deg);
      filter: hue-rotate(60deg) brightness(1.2);
    }
    66% {
      transform: rotate(240deg) scale(0.8) skew(-3deg);
      filter: hue-rotate(120deg) brightness(0.9);
    }
    100% {
      transform: rotate(360deg) scale(1) skew(0deg);
      filter: hue-rotate(0deg) brightness(1);
    }
  }

  @keyframes quantumFlicker {
    0%, 100% {
      opacity: 0.2;
      transform: scale(1) rotate(0deg);
      filter: blur(0px);
    }
    10% {
      opacity: 0.8;
      transform: scale(1.3) rotate(36deg);
      filter: blur(1px);
    }
    20% {
      opacity: 0.1;
      transform: scale(0.7) rotate(72deg);
      filter: blur(2px);
    }
    30% {
      opacity: 0.9;
      transform: scale(1.1) rotate(108deg);
      filter: blur(0.5px);
    }
    40% {
      opacity: 0.3;
      transform: scale(0.9) rotate(144deg);
      filter: blur(1.5px);
    }
    50% {
      opacity: 0.7;
      transform: scale(1.2) rotate(180deg);
      filter: blur(0px);
    }
    60% {
      opacity: 0.4;
      transform: scale(0.8) rotate(216deg);
      filter: blur(2px);
    }
    70% {
      opacity: 0.6;
      transform: scale(1.05) rotate(252deg);
      filter: blur(1px);
    }
    80% {
      opacity: 0.2;
      transform: scale(0.95) rotate(288deg);
      filter: blur(1.5px);
    }
    90% {
      opacity: 0.5;
      transform: scale(1.15) rotate(324deg);
      filter: blur(0.5px);
    }
  }

  @keyframes dimensionalRift {
    0% {
      clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
      transform: rotate(0deg) scale(1);
    }
    25% {
      clip-path: polygon(30% 0%, 100% 30%, 70% 100%, 0% 70%);
      transform: rotate(90deg) scale(1.1);
    }
    50% {
      clip-path: polygon(0% 0%, 70% 0%, 100% 70%, 30% 100%);
      transform: rotate(180deg) scale(0.9);
    }
    75% {
      clip-path: polygon(0% 30%, 70% 0%, 100% 70%, 30% 100%);
      transform: rotate(270deg) scale(1.05);
    }
    100% {
      clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
      transform: rotate(360deg) scale(1);
    }
  }
  
  /* Enhanced scroll-triggered animations */
  .scroll-reveal {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .scroll-reveal.revealed {
    opacity: 1;
    transform: translateY(0);
  }

  .scroll-reveal-left {
    opacity: 0;
    transform: translateX(-50px);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .scroll-reveal-left.revealed {
    opacity: 1;
    transform: translateX(0);
  }

  .scroll-reveal-right {
    opacity: 0;
    transform: translateX(50px);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .scroll-reveal-right.revealed {
    opacity: 1;
    transform: translateX(0);
  }

  .scroll-scale {
    opacity: 0;
    transform: scale(0.8);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .scroll-scale.revealed {
    opacity: 1;
    transform: scale(1);
  }

  /* Apply enhanced animations to sections */
  .animated-bg::before {
    animation: gradientShift 15s ease infinite;
  }
  
  .floating {
    animation: subtleFloat 6s ease-in-out infinite;
  }

  .parallax-float {
    animation: parallaxFloat 8s ease-in-out infinite;
  }
  
  .pulsing {
    animation: pulse 3s ease-in-out infinite;
  }

  .shimmer-effect {
    position: relative;
    overflow: hidden;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(109, 40, 217, 0.1),
        transparent
      );
      animation: shimmer 2s infinite;
    }
  }

  .glow-effect {
    animation: glow 2s ease-in-out infinite alternate;
  }

  .morph-background {
    animation: morphBackground 10s ease-in-out infinite;
  }

  /* Staggered animation delays for lists */
  .stagger-animation > *:nth-child(1) { animation-delay: 0.1s; }
  .stagger-animation > *:nth-child(2) { animation-delay: 0.2s; }
  .stagger-animation > *:nth-child(3) { animation-delay: 0.3s; }
  .stagger-animation > *:nth-child(4) { animation-delay: 0.4s; }
  .stagger-animation > *:nth-child(5) { animation-delay: 0.5s; }
  .stagger-animation > *:nth-child(6) { animation-delay: 0.6s; }
  .stagger-animation > *:nth-child(7) { animation-delay: 0.7s; }
  .stagger-animation > *:nth-child(8) { animation-delay: 0.8s; }

  /* Focus Styles */
  :focus-visible {
    outline: 2px solid ${({ theme }) => theme.components.button.primary.background};
    outline-offset: 2px;
  }

  /* Utility Classes */
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  .gradient-text {
    background: linear-gradient(135deg, ${({ theme }) => theme.components.button.primary.background} 0%, ${({ theme }) => theme.colors.accent || '#A78BFA'} 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
  }

  .shadow-glow {
    box-shadow: 0 0 15px ${({ theme }) => `rgba(${parseInt(theme.components.button.primary.background.slice(1, 3), 16)}, ${parseInt(theme.components.button.primary.background.slice(3, 5), 16)}, ${parseInt(theme.components.button.primary.background.slice(5, 7), 16)}, 0.2)`};
  }
`;

export default GlobalStyles;