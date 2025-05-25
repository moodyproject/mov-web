export const theme = {
  colors: {
    // Base backgrounds
    background: '#0A090F', // Darker, more black background
    backgroundSecondary: '#121118', // Slightly lighter than background
    backgroundTertiary: '#181622', // Another shade for layering
    
    // Primary colors
    primary: '#8B5CF6', // Purple
    secondary: '#635BFF', // Secondary purple
    accent: '#A78BFA', // Lighter purple accent
    
    // Text colors
    text: '#FFFFFF', // Pure white for maximum contrast
    textSecondary: 'rgba(255, 255, 255, 0.90)',
    textTertiary: 'rgba(255, 255, 255, 0.75)',
    
    // UI elements
    border: 'rgba(139, 92, 246, 0.15)', // Subtle purple border
    hover: '#8B5CF6', // Purple
    active: '#635BFF', // Secondary purple
    
    // Common overlays
    overlay: {
      light: 'rgba(139, 92, 246, 0.05)', // Purple overlay
      medium: 'rgba(139, 92, 246, 0.08)',
      strong: 'rgba(139, 92, 246, 0.15)',
    },
    
    // Gradients
    gradients: {
      primary: 'linear-gradient(135deg, #8B5CF6 0%, #635BFF 100%)',
      dark: 'linear-gradient(135deg, #0A090F 0%, #181622 100%)',
      glass: 'linear-gradient(135deg, rgba(139, 92, 246, 0.03) 0%, rgba(99, 91, 255, 0.01) 100%)',
      glow: 'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.15) 0%, rgba(0, 0, 0, 0) 70%)',
      enhancedGlow: 'radial-gradient(circle at 50% 50%, rgba(109, 40, 217, 0.2) 0%, rgba(0, 0, 0, 0) 70%)',
      dashboard: 'linear-gradient(180deg, #121118 0%, #0A090F 100%)',
      chart: 'linear-gradient(180deg, rgba(139, 92, 246, 0.3) 0%, rgba(99, 91, 255, 0.05) 100%)',
      purpleToBlue: 'linear-gradient(135deg, #6D28D9 0%, #4F46E5 100%)',
      purpleToPink: 'linear-gradient(135deg, #6D28D9 0%, #DB2777 100%)',
      darkPurple: 'linear-gradient(135deg, #4C1D95 0%, #6D28D9 100%)',
      subtleGlow: 'radial-gradient(circle at 50% 0%, rgba(109, 40, 217, 0.12) 0%, rgba(0, 0, 0, 0) 80%)',
    },

    // Status colors
    success: '#8B5CF6', // Purple
    error: '#F87171', // Red
    warning: '#FBBF24', // Yellow
    info: '#60A5FA', // Blue
  },
  
  shadows: {
    primary: '0 20px 40px rgba(10, 9, 15, 0.5)', // Darker shadow
    soft: '0 10px 30px rgba(139, 92, 246, 0.15)', // Purple shadow
    subtle: '0 5px 15px rgba(10, 9, 15, 0.2)', // Subtle shadow
    glow: '0 0 30px rgba(139, 92, 246, 0.2)', // Purple glow
    enhancedGlow: '0 0 40px rgba(109, 40, 217, 0.25)', // Enhanced purple glow
    inner: 'inset 0 2px 4px rgba(10, 9, 15, 0.3)',
    textGlow: '0 0 8px rgba(109, 40, 217, 0.4)',
    cardHover: '0 8px 30px rgba(109, 40, 217, 0.12)'
  },
  
  components: {
    card: {
      background: '#121118', // Dark card background
      border: '1px solid rgba(139, 92, 246, 0.1)', // Very subtle purple border
      hover: {
        background: '#181622',
        border: '1px solid rgba(139, 92, 246, 0.2)', // Purple border
      }
    },
    button: {
      primary: {
        background: '#6D28D9', // Darker vibrant purple
        hover: '#7C3AED', // Slightly lighter when hovering
        active: '#5B21B6', // Even darker when active
        text: '#FFFFFF'
      },
      secondary: {
        background: 'rgba(109, 40, 217, 0.1)', // Matching dark purple with transparency
        border: '1px solid rgba(109, 40, 217, 0.2)', // Matching border
        hover: 'rgba(109, 40, 217, 0.2)', // Darker purple hover
        text: '#FFFFFF'
      }
    },
    chart: {
      background: '#121118',
      grid: 'rgba(255, 255, 255, 0.05)',
      line: '#6D28D9', // Updated chart line color to match
      area: 'url(#purpleGradient)'
    },
    globalBackground: {
      gradient: 'linear-gradient(to bottom, rgba(10, 9, 15, 0.95) 0%, rgba(109, 40, 217, 0.08) 30%, rgba(109, 40, 217, 0.06) 70%, rgba(10, 9, 15, 0.95) 100%), radial-gradient(circle at 50% 50%, rgba(109, 40, 217, 0.15) 0%, transparent 80%)',
      opacity: 1,
      secondaryGradient: 'linear-gradient(135deg, rgba(109, 40, 217, 0.06) 0%, transparent 100%)',
      overlayOpacity: 0.03
    },
    typography: {
      heading: {
        color: '#FFFFFF',
        fontWeight: 700,
        lineHeight: 1.2,
        letterSpacing: '-0.02em'
      },
      body: {
        color: 'rgba(255, 255, 255, 0.85)',
        fontWeight: 400,
        lineHeight: 1.6
      },
      overline: {
        color: '#6D28D9',
        fontWeight: 500,
        letterSpacing: '0.1em',
        textTransform: 'uppercase'
      }
    },
    badge: {
      background: 'rgba(109, 40, 217, 0.1)',
      color: '#6D28D9',
      padding: '0.5rem 1.5rem',
      borderRadius: '100px'
    }
  },
  
  radius: {
    small: '4px',
    medium: '8px',
    large: '12px',
    xl: '16px',
    xxl: '24px'
  },
  
  transitions: {
    standard: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    smooth: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    bounce: 'all 0.6s cubic-bezier(0.68, -0.6, 0.32, 1.6)'
  },
  
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
    '3xl': '4rem',
    '4xl': '6rem',
  }
}; 