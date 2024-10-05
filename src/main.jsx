import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Label from './components/General'
import Form from './components/Form'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Form />   
  </StrictMode>,
)
