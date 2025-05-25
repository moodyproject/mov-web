import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeProvider } from 'styled-components'
import { theme, GlobalStyles, CSSVariables } from './styles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <CSSVariables />
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
