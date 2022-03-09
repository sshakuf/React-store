import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAgYGt6Giq8WOBvxzi3PYEiQ31VPlO-tms",
    authDomain: "storedb-f508c.firebaseapp.com",
    projectId: "storedb-f508c",
    storageBucket: "storedb-f508c.appspot.com",
    messagingSenderId: "910611241685",
    appId: "1:910611241685:web:357c2c0f13afaedd3f605c",
    measurementId: "G-TXD0VS5202"
  };

  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;


