
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { themeDefault } from './styles/theme'
import { GLobalStyle } from './styles/global'
import { Router } from './routes'
import { CartProvider } from './hooks/context'
ReactDOM.createRoot(document.getElementById('root')!).render(
  
    <CartProvider>
    <ThemeProvider theme={themeDefault}>
    <GLobalStyle />
    <Router/>
    </ThemeProvider>
    </CartProvider>

   
)
