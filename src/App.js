import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component.jsx';
import SignInAndSignOutPage from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component';

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
        <Route exact path='/' element={<HomePage />} /> 
        <Route path='/shop' element={<ShopPage/>} />
        <Route path='/signin' element={<SignInAndSignOutPage/>} />
      </Routes>
    </div>
  );
}

export default App;

// <Route path='/shop/hats' element={<HatsPage />} />

