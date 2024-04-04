import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Skills from './page/Skills.jsx'
import Projects from './page/Projects.jsx'
import Formations from './page/Formations.jsx'
import Curriculum from './page/Curriculum.jsx'

import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/skills',
    element: <Skills />
  },
  {
    path: '/projets',
    element: <Projects />
  },
  {
    path: '/formations', 
    element: <Formations />
  },
  {
    path: '/CV',
    element: <Curriculum />
  }
 

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
