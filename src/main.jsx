import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from './Layout/MainLayout.jsx';
import HomePage from './pages/homePage/HomePage.jsx';
import TimelinePage from './pages/timeline/TimelinePage.jsx';
import StatsPage from './pages/statsPage/StatsPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path:'/timeline',
        Component: TimelinePage

      },
      {
        path:'/stats',
        Component:StatsPage
      }
      
    ]
}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
