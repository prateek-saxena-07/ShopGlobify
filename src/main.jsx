import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import NotFound from './components/NotFound.jsx';
import './index.css';
import ProductList from './components/ProductList.jsx';
import ProductDetail from './components/ProductDetail.jsx';
import Cart from './components/Cart.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const appRouter = createBrowserRouter([
  {
    path: '',
    element: <App></App>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: '/',
        element: <ProductList></ProductList>
      },
      
      {
        path: '/:product',
        element: <ProductDetail></ProductDetail>
      },
      {
        path: '/cart',
        element: <Cart></Cart>
      },
    ], 
  }
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
);

