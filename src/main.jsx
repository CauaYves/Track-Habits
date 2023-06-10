import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { StrictMode } from 'react'
import { GlobalStyle } from './styles/Globalstyles.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle/>
    <App />
  </StrictMode>,
)
