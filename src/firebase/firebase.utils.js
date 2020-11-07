import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCwDL9i6Lv2kTidJPRJNdIEwm8LYP9G_BY",
    authDomain: "ecomm-react-43e60.firebaseapp.com",
    databaseURL: "https://ecomm-react-43e60.firebaseio.com",
    projectId: "ecomm-react-43e60",
    storageBucket: "ecomm-react-43e60.appspot.com",
    messagingSenderId: "41098733137",
    appId: "1:41098733137:web:4315edd189f1a091ba7a70"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;