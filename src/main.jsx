import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"

import { BrowserRouter, Route, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import Layout from './Layout.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import Services from './Components/Services/Services.jsx'
import {propertySearchImage, exportGuidance, financialSupport, listingProperty,
  marketAnalysis, negotiationSkill, serviceImage} from './Components/Services/Services.jsx'
import ChoosUs from './Components/ChoosUs/ChoosUs'
import About from './Components/About/About'
import Contact from './Components/ContactUs/ContactUs'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "services",
        element: <Services />
      },
      {
        path: "About",
        element: <About/>
      },
      {
       path: "contact",
       element: <Contact/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router = {router}/>
  </React.StrictMode>,
)
