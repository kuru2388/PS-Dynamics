import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ClassHeader from './Header.tsx'
import ClassSection from './Section.tsx'
import ClassFooter from './Footer.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
    <ClassHeader />
    <ClassSection />
    <ClassFooter />
  </StrictMode>,
)
