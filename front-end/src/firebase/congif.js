import firebase from 'firebase/app';
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCArXi75-nR6-qaKhhv30l-NP_KFXriilA",
    authDomain: "react-firebase-bda99.firebaseapp.com",
    projectId: "react-firebase-bda99",
    storageBucket: "react-firebase-bda99.appspot.com",
    messagingSenderId: "1032104324821",
    appId: "1:1032104324821:web:767adf1d8c160906733c5c",
    measurementId: "G-73F2Z8V0XF"
  };


// init firebase server
firebase.initializeApp(firebaseConfig);

// init service
const projectFirestore = firebase.firestore();

export { projectFirestore }