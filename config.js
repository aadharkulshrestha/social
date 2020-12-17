import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyDn2agnW2H0Jx06kpItrBExHRxCCj51z-A",
  authDomain: "social-worker-13c81.firebaseapp.com",
  projectId: "social-worker-13c81",
  storageBucket: "social-worker-13c81.appspot.com",
  messagingSenderId: "581953869908",
  appId: "1:581953869908:web:465deff4db07d2de9875c1",
  measurementId: "G-Z7SL3TNBG4"
  };
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
