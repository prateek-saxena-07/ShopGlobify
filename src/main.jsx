import { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import NotFound from './components/NotFound.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { BarLoader } from 'react-spinners'

// Lazy loaded components
const ProductList = lazy(() => import('./components/ProductList.jsx'));
const ProductDetail = lazy(() => import('./components/ProductDetail.jsx'));
const Cart = lazy(() => import('./components/Cart.jsx'));
const CheckOut = lazy(() => import('./components/CheckOut.jsx'));

//Routing
const appRouter = createBrowserRouter([
  {
    path: '',
    element: <App></App>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={<div><center><BarLoader></BarLoader></center></div>}>
            <ProductList />
          </Suspense>
        ),
      },
      {
        path: '/:product',
        element: (
          <Suspense fallback={<div><center><BarLoader></BarLoader></center></div>}>
            <ProductDetail />
          </Suspense>
        ),
      },
      {
        path: '/cart',
        element: (
          <Suspense fallback={<div><center><BarLoader></BarLoader></center></div>}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: '/checkout',
        element: (
          <Suspense fallback={<div><center><BarLoader></BarLoader></center></div>}>
            <CheckOut />
          </Suspense>
        ),
      },
    ],
  },
]);

//Creating Root
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
