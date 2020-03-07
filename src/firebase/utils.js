import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDFgZizrryh2bDDVB0GKoo1Boy6-3ovE5w',
  authDomain: 'crown-clothing-11f66.firebaseapp.com',
  databaseURL: 'https://crown-clothing-11f66.firebaseio.com',
  projectId: 'crown-clothing-11f66',
  storageBucket: 'crown-clothing-11f66.appspot.com',
  messagingSenderId: '109403183762',
  appId: '1:109403183762:web:0fb51b86f0e30f4b43644b',
  measurementId: 'G-X6EWCZBJWS'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
