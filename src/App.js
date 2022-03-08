import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

const HatsPage = () => (
<div>
  <h1>HATS page</h1>
</div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} /> 
        <Route path='/shop' element={<ShopPage/>} />

</Routes>
    </BrowserRouter>
  );
}

export default App;

// <Route path='/shop/hats' element={<HatsPage />} />

