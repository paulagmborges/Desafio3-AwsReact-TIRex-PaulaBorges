import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { PageRoute } from './pages/page-route';          
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <PageRoute />
     
    </BrowserRouter>
  </StrictMode>,
);
