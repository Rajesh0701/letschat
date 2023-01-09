// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDTL7JwCziVG-1rF7TetBK8Ua3IYMlGyb4",
  authDomain: "letschat-87e79.firebaseapp.com",
  projectId: "letschat-87e79",
  storageBucket: "letschat-87e79.appspot.com",
  messagingSenderId: "343789661352",
  appId: "1:343789661352:web:554179eb09bfe533d4e69d",
  measurementId: "G-ZSJRSR02TH",
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
