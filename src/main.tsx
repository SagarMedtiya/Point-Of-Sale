import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import About from './pages/About'
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
    {
        path:'/about',
        element: <About/>
    }
  ]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
