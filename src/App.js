import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import {connect} from 'react-redux';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component.jsx';
import SignInAndSignOutPage from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import {setCurrentUser} from './redux/user/user.actions'


const HatsPage = () => (
<div>
  <h1>HATS page</h1> 
</div>  
);

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
            })
        });
        setCurrentUser({userAuth});
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
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
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps )(App);

// <Route path='/shop/hats' element={<HatsPage />} />

