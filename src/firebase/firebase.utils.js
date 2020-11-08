import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDq5XskIoV0Me_vaY_24GdTnkYEWoMYvUs",
  authDomain: "ecomm-react-66c22.firebaseapp.com",
  databaseURL: "https://ecomm-react-66c22.firebaseio.com",
  projectId: "ecomm-react-66c22",
  storageBucket: "ecomm-react-66c22.appspot.com",
  messagingSenderId: "676534269066",
  appId: "1:676534269066:web:0cdd5ae87ed1d2eb4b6973"
};

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if (!snapshot.exists) { 
      const { displayName, email } = userAuth;
      const createAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createAt,
          ...additionalData
        });
      } catch (error) {
        console.log('Error creating user', error.message);
      }
    }

    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;