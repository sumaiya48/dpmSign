import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './Components/router/router.jsx';
import { CartProvider } from './Components/Context/CartContext.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
        <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>
);
