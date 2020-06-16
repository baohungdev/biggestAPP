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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  // if userAuth doesn't exsist return

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // console.log(userRef);
  // queryDoc the users at uid of userAuth of props pass from Parent

  const snapShot = await userRef.get();
  // console.log(snapShot.data());
  // get snapshot obj of data from the doc

  // const collectionRef = firestore.collection("users");
  // // require a collection name users
  // const collectionSnapshot = await collectionRef.get();
  // // wait to get that collection from the database
  // const myCollection = collectionSnapshot.docs.map((user) => user.data());
  // //take the data from collectionSnap that we require

  // console.log(myCollection);
  // // write out all the users that are inside my database

  if (!snapShot.exists) {
    // snapshot give a prop of exists of the snapshot that we got from the query requsest, if the snapshot dont exsists, we create that user.

    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const addCollectionsAndDocumentsToDatabase = async (
  collectionKey,
  objectToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  // Creata a new collection Ref at collectionKey
  const batch = firestore.batch();

  objectToAdd.forEach((element) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, element);
  });
  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollections = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollections.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {});
};
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
