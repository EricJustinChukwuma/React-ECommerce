import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Shop from './Pages/Shop';
import Cart from "./Pages/Cart";
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSignUp from "./Pages/LoginSignUp";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import { createBrowserRouter, RouterProvider} from 'react-router-dom';



function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory category="mens"/>} />
          <Route path="/womens" element={<ShopCategory category="womens" />} />
          <Route path="/kids" element={<ShopCategory category="kid" />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignUp />} />
        </Routes>
      </BrowserRouter>
      {/* <RouterProvider router={router}/> */}
    </>
  )
}

export default App
