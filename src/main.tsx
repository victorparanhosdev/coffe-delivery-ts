import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { themeDefault } from './styles/theme'
import { GLobalStyle } from './styles/global'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={themeDefault}>
    <GLobalStyle />

    </ThemeProvider>
  </React.StrictMode>,
)
