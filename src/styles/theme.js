export const theme = {
  colors: {
    // Base backgrounds
    background: '#201F1F', // Eerie black
    backgroundSecondary: '#8B5CF6', // Purple
    backgroundTertiary: '#9BA88D', // Muted fern green instead of thistle
    
    // Primary colors
    primary: '#8B5CF6', // Purple
    secondary: '#798478', // Battleship gray
    accent: '#8B5CF6', // Purple
    
    // Text colors
    text: '#FFFFFF', // Pure white for maximum contrast
    textSecondary: 'rgba(255, 255, 255, 0.95)',
    textTertiary: 'rgba(255, 255, 255, 0.85)',
    
    // UI elements
    border: 'rgba(139, 92, 246, 0.2)', // Purple border
    hover: '#8B5CF6', // Purple
    active: '#798478', // Battleship gray
    
    // Common overlays
    overlay: {
      light: 'rgba(139, 92, 246, 0.05)', // Purple overlay
      medium: 'rgba(139, 92, 246, 0.08)',
      strong: 'rgba(139, 92, 246, 0.15)',
    },
    
    // Gradients
    gradients: {
      primary: 'linear-gradient(135deg, #8B5CF6 0%, #798478 100%)',
      dark: 'linear-gradient(135deg, #201F1F 0%, #798478 100%)',
      glass: 'linear-gradient(135deg, rgba(139, 92, 246, 0.03) 0%, rgba(211, 192, 205, 0.01) 100%)',
      glow: 'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.15) 0%, rgba(0, 0, 0, 0) 70%)'
    },

    // Status colors
    success: '#8B5CF6', // Purple
    error: '#9BA88D', // Muted fern green instead of thistle
    warning: '#798478', // Battleship gray
    info: '#798478', // Battleship gray
  },
  
  shadows: {
    primary: '0 20px 40px rgba(32, 31, 31, 0.4)', // Eerie black shadow
    soft: '0 10px 30px rgba(139, 92, 246, 0.2)', // Purple shadow
    subtle: '0 5px 15px rgba(121, 132, 120, 0.1)', // Battleship gray shadow
    glow: '0 0 30px rgba(139, 92, 246, 0.15)', // Purple glow
    inner: 'inset 0 2px 4px rgba(32, 31, 31, 0.2)'
  },
  
  components: {
    card: {
      background: '#798478', // Changed to battleship gray
      border: '1px solid rgba(139, 92, 246, 0.2)', // Purple border
      hover: {
        background: 'rgba(32, 31, 31, 0.98)',
        border: '1px solid rgba(139, 92, 246, 0.3)', // Purple border
      }
    },
    button: {
      primary: {
        background: '#8B5CF6', // Purple
        hover: '#798478', // Battleship gray
        active: '#201F1F', // Eerie black
        text: '#FFFFFF'
      },
      secondary: {
        background: '#798478',
        border: '1px solid rgba(139, 92, 246, 0.2)', // Purple border
        hover: 'rgba(139, 92, 246, 0.1)', // Purple hover
        text: '#FFFFFF'
      }
    }
  },
  
  radius: {
    small: '4px',
    medium: '8px',
    large: '12px',
    xl: '16px'
  },
  
  transitions: {
    standard: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    smooth: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    bounce: 'all 0.6s cubic-bezier(0.68, -0.6, 0.32, 1.6)'
  }
}; 