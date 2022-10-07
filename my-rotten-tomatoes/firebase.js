import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD4PORR3ilsc0vtQ0RCMxm6M6gll6mkAdI",
  authDomain: "my-rotten-tomatoes-363004.firebaseapp.com",
  projectId: "my-rotten-tomatoes-363004",
  storageBucket: "my-rotten-tomatoes-363004.appspot.com",
  messagingSenderId: "314616865306",
  appId: "1:314616865306:web:1ea8d62e3fe30e8a64a7a3"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
