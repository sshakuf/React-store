import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component.jsx';

const HatsPage = () => (
<div>
  <h1>HATS page</h1> 
</div>  
);

function App() {
  return (
    <div>
    <Header />
      <Routes>
        <Route path='/' element={<HomePage />} /> 
        <Route path='/shop' element={<ShopPage/>} />
      </Routes>
    </div>
  );
}

export default App;

// <Route path='/shop/hats' element={<HatsPage />} />

