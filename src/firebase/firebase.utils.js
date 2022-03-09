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

  export const createUserProfileDocument = async (userAuth, additonalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();
    if (!snapshot.exists)
    {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName, 
                email,
                createdAt,
                ...additonalData
            });

        }catch(error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
  };

  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;


