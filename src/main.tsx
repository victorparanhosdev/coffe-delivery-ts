
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { themeDefault } from './styles/theme'
import { GLobalStyle } from './styles/global'
import { Router } from './routes'

ReactDOM.createRoot(document.getElementById('root')!).render(

    <ThemeProvider theme={themeDefault}>
    <GLobalStyle />
    <Router/>
    </ThemeProvider>

)
