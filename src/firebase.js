import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAfdaxPE_9FY29_J_0BLtrR6-8IoxoVc8U",
  authDomain: "clone-mailer.firebaseapp.com",
  projectId: "clone-mailer",
  storageBucket: "clone-mailer.appspot.com",
  messagingSenderId: "100757036723",
  appId: "1:100757036723:web:de4406087a8746881a1ac6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export { db };