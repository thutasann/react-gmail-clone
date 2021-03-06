import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBYyoeQTp2mibpiuNhHjYhKPYrMb47N2kk",
  authDomain: "clone-e131e.firebaseapp.com",
  projectId: "clone-e131e",
  storageBucket: "clone-e131e.appspot.com",
  messagingSenderId: "84077546510",
  appId: "1:84077546510:web:2c3eae8e7665416c2a405f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };

