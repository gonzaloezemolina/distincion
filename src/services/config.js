// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCmypJ7O-kSqAr_6zLMvDGSNb1X9uP9JQ",
  authDomain: "distincion-bda9b.firebaseapp.com",
  projectId: "distincion-bda9b",
  storageBucket: "distincion-bda9b.appspot.com",
  messagingSenderId: "365134162457",
  appId: "1:365134162457:web:313fe8da78536dc8451888"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)