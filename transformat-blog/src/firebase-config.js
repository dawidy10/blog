// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaYtupGZNfTWQf29tvmY8pIC8LO_SWGto",
  authDomain: "blog-2071c.firebaseapp.com",
  projectId: "blog-2071c",
  storageBucket: "blog-2071c.appspot.com",
  messagingSenderId: "1077580516001",
  appId: "1:1077580516001:web:c19b3ea556ed424be2bee0",
  measurementId: "G-K3NDZC0VGE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();