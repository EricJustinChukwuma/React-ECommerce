import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from "./Components/Footer/Footer";
import Shop from './Pages/Shop';
import Cart from "./Pages/Cart";
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSignUp from "./Pages/LoginSignUp";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import image_1 from "./assets/SnowVase2.png";
import image_2 from "./assets/Nonny_bro.png";
import image_3 from "./assets/Cleopatra.png";

// import { createBrowserRouter, RouterProvider} from 'react-router-dom';



function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory banner={image_2} category="mens"/>} />
          <Route path="/womens" element={<ShopCategory banner={image_1} category="womens" />} />
          <Route path="/kids" element={<ShopCategory banner={image_3} category="kid" />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* <RouterProvider router={router}/> */}
    </>
  )
}

export default App
