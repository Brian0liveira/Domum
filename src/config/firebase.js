import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCTl1-u9MS1n5JQFmau3DtlKu64ixcvFI8",
    authDomain: "domum-37f46.firebaseapp.com",
    projectId: "domum-37f46",
    storageBucket: "domum-37f46.appspot.com",
    messagingSenderId: "619227481327",
    appId: "1:619227481327:web:132fd9ae06a5d34144471a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export const database = firebase.firestore();