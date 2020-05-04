import firebase from "firebase/app";

import "firebase/auth";

import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCA06apfBxspzI2QeobwBHUdQm7Y4CjYmQ",
  authDomain: "clothing-db-bc887.firebaseapp.com",
  databaseURL: "https://clothing-db-bc887.firebaseio.com",
  projectId: "clothing-db-bc887",
  storageBucket: "clothing-db-bc887.appspot.com",
  messagingSenderId: "864103712844",
  appId: "1:864103712844:web:1488fd6765f1d1d7ac8ce9",
  measurementId: "G-Q5PT9W0PE0",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
