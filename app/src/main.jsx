import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppContainer from './components/App_container'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppContainer />
  </StrictMode>
)
