import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GeneralForm from './components/General'
import EducationForm from './components/Education'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GeneralForm />   
    <EducationForm />
  </StrictMode>,
)
