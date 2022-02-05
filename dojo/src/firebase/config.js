import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import 'firebase/compat/storage'


const firebaseConfig = {
    apiKey: "AIzaSyB1ES5KG7sJSvIipPz1j7B-kzsNlMmq2_A",
    authDomain: "dojo-bbf29.firebaseapp.com",
    projectId: "dojo-bbf29",
    storageBucket: "dojo-bbf29.appspot.com",
    messagingSenderId: "927579721760",
    appId: "1:927579721760:web:73113e3d4e829cb505ac45",
    measurementId: "G-QFM5CTF87B"
  };

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp, projectStorage }

