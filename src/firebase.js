import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDSEmgdR4l_cL6DRPFYx3WShOnff18FF0k",
  authDomain: "chatapp-6a4a1.firebaseapp.com",
  projectId: "chatapp-6a4a1",
  storageBucket: "chatapp-6a4a1.appspot.com",
  messagingSenderId: "923860680785",
  appId: "1:923860680785:web:5cbe17e209c9144b2bf870",
  measurementId: "G-ESGSPN75BJ"
  };
  
  // Use this to initialize the firebase App
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  // Use these for db & auth
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { auth, db };

