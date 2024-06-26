import React from 'react'
import ReactDOM from 'react-dom/client'
import { NextUIProvider } from "@nextui-org/react";
import { RouterProvider } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer";

import { router } from "./router";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </NextUIProvider>
  </React.StrictMode>
)
