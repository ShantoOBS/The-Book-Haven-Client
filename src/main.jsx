import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom";
import { router } from '../src/Routes/Routes';
import AuthProvider from './Provider/AuthProvider';
import { ThemeProvider } from './Provider/ThemeProvider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>

       <AuthProvider>
                <RouterProvider router={router} />
                 
    </AuthProvider>
      
       </ThemeProvider>
   

  </StrictMode>
)
