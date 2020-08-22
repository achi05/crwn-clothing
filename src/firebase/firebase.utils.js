import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDIGnPprbSjodv3S5tWfoVRIwJn5x5N-ak",
  authDomain: "crwn-db-96026.firebaseapp.com",
  databaseURL: "https://crwn-db-96026.firebaseio.com",
  projectId: "crwn-db-96026",
  storageBucket: "crwn-db-96026.appspot.com",
  messagingSenderId: "359272500706",
  appId: "1:359272500706:web:48de797a9013ab7f06fdbb",
  measurementId: "G-R0P9FPP5MS",
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
