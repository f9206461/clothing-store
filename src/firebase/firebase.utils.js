import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'; // firebase/compat/auth

const config = {
    apiKey: "AIzaSyAFY6xyJADL8voknsPkFAssnXj_alsCCYY",
    authDomain: "crwn-db-65f8d.firebaseapp.com",
    projectId: "crwn-db-65f8d",
    storageBucket: "crwn-db-65f8d.appspot.com",
    messagingSenderId: "789392842564",
    appId: "1:789392842564:web:3547c2c809317e38ae4111",
    measurementId: "G-VE9LQ6EJVM"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;