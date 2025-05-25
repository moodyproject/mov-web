import { createGlobalStyle } from 'styled-components';

// This global style defines CSS variables from the theme
// so we can use them in both styled-components and regular CSS
const CSSVariables = createGlobalStyle`
  :root {
    /* Color System */
    --color-background: ${({ theme }) => theme.colors.background};
    --color-surface: ${({ theme }) => theme.colors.backgroundSecondary};
    --color-surface-raised: ${({ theme }) => theme.colors.backgroundTertiary};
    
    --color-text-primary: ${({ theme }) => theme.colors.text};
    --color-text-secondary: ${({ theme }) => theme.colors.textSecondary};
    --color-text-tertiary: ${({ theme }) => theme.colors.textTertiary};
    
    --color-primary: ${({ theme }) => theme.colors.primary};
    --color-secondary: ${({ theme }) => theme.colors.secondary};
    --color-accent: ${({ theme }) => theme.colors.accent};
    
    --color-border: ${({ theme }) => theme.colors.border};
    
    /* Shadows */
    --shadow-primary: ${({ theme }) => theme.shadows.primary};
    --shadow-soft: ${({ theme }) => theme.shadows.soft};
    --shadow-glow: ${({ theme }) => theme.shadows.glow};
    
    /* Border Radius */
    --radius-small: ${({ theme }) => theme.radius.small};
    --radius-medium: ${({ theme }) => theme.radius.medium};
    --radius-large: ${({ theme }) => theme.radius.large};
    --radius-xl: ${({ theme }) => theme.radius.xl};
    --radius-xxl: ${({ theme }) => theme.radius.xxl};
    
    /* Transitions */
    --transition-standard: ${({ theme }) => theme.transitions.standard};
    --transition-smooth: ${({ theme }) => theme.transitions.smooth};
    --transition-bounce: ${({ theme }) => theme.transitions.bounce};
    
    /* Z-indices */
    --z-index-header: 1000;
    --z-index-modal: 2000;
    --z-index-tooltip: 3000;
    
    /* Spacing */
    --spacing-xs: 0.25rem;
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 2rem;
    --spacing-xl: 4rem;
    
    /* Max width */
    --container-width: 1400px;
    
    /* Gradient definitions */
    --gradient-primary: ${({ theme }) => theme.colors.gradients.primary};
    --gradient-dark: ${({ theme }) => theme.colors.gradients.dark};
    --gradient-glass: ${({ theme }) => theme.colors.gradients.glass};
    --gradient-glow: ${({ theme }) => theme.colors.gradients.glow};
    --gradient-dashboard: ${({ theme }) => theme.colors.gradients.dashboard};
    --gradient-chart: ${({ theme }) => theme.colors.gradients.chart};
  }
`;

export default CSSVariables; 