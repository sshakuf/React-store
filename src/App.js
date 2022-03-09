import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component.jsx';
import SignInAndSignOutPage from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component';

import { auth } from './firebase/firebase.utils';



const HatsPage = () => (
<div>
  <h1>HATS page</h1> 
</div>  
);

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }

  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user});

      console.log(user);

    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
      <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route exact path='/' element={<HomePage />} /> 
          <Route path='/shop' element={<ShopPage/>} />
          <Route path='/signin' element={<SignInAndSignOutPage/>} />
        </Routes>
      </div>
    );
  }
}

export default App;

// <Route path='/shop/hats' element={<HatsPage />} />

