import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    --scrollbar-width: 8px;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 1.5;
    overflow-x: hidden;
    width: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Custom Scrollbar */
  ::-webkit-scrollbar {
    width: var(--scrollbar-width);
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.background};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary};
    border-radius: calc(var(--scrollbar-width) / 2);
    
    &:hover {
      background: ${({ theme }) => theme.colors.accent};
    }
  }

  /* Selection */
  ::selection {
    background: ${({ theme }) => theme.colors.primary}40;
    color: ${({ theme }) => theme.colors.text};
  }

  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 600;
    letter-spacing: -0.02em;
    line-height: 1.2;
    margin-bottom: 1rem;
  }

  p {
    color: ${({ theme }) => theme.colors.textSecondary};
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: ${({ theme }) => theme.transitions.standard};

    &:hover {
      color: ${({ theme }) => theme.colors.accent};
    }
  }

  /* Buttons */
  button {
    font-family: inherit;
    border: none;
    outline: none;
    cursor: pointer;
    transition: ${({ theme }) => theme.transitions.standard};
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text};
    border-radius: ${({ theme }) => theme.radius.medium};
    padding: 0.75rem 1.5rem;
    font-weight: 500;

    &:hover {
      background: ${({ theme }) => theme.colors.accent};
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(0);
    }
  }

  /* Inputs */
  input, textarea, select {
    background: ${({ theme }) => theme.colors.background};
    border: 1px solid ${({ theme }) => theme.colors.border};
    color: ${({ theme }) => theme.colors.text};
    border-radius: ${({ theme }) => theme.radius.medium};
    padding: 0.75rem 1rem;
    transition: ${({ theme }) => theme.transitions.standard};

    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.primary};
      box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary}20;
    }
  }

  /* Cards */
  .card {
    background: ${({ theme }) => theme.colors.background};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radius.large};
    padding: 1.5rem;
    transition: ${({ theme }) => theme.transitions.standard};

    &:hover {
      border-color: ${({ theme }) => theme.colors.primary};
      box-shadow: ${({ theme }) => theme.shadows.soft};
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
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;

    @media (max-width: 768px) {
      padding: 0 1.5rem;
    }
  }

  /* Animations */
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

  /* Focus Styles */
  :focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
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
`;

export default GlobalStyles;