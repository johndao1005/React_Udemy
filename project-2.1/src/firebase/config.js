// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyB-yL1P0vrTdr0HscI01jcsVGSOmGZCt3o",

  authDomain: "project-2-1-8c900.firebaseapp.com",

  projectId: "project-2-1-8c900",

  storageBucket: "project-2-1-8c900.appspot.com",

  messagingSenderId: "1028856619735",

  appId: "1:1028856619735:web:0d09007187cea5e73b4692",

  measurementId: "G-VBJVQQXZQQ"

};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth (app);