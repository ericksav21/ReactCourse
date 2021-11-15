import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyBLP8GkQ-GsIwpvNC0HWNwWyVax23qVhXI',
  authDomain: 'crwn-db-c4217.firebaseapp.com',
  projectId: 'crwn-db-c4217',
  storageBucket: 'crwn-db-c4217.appspot.com',
  messagingSenderId: '355290524626',
  appId: '1:355290524626:web:ad4500a55862303742f60b',
  measurementId: 'G-FNF843EVNG',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
