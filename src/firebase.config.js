import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyARzkAQURdI_9PJveRBvEbu1rEiwlVrooI",
  authDomain: "house-marketplace-app-b490f.firebaseapp.com",
  projectId: "house-marketplace-app-b490f",
  storageBucket: "house-marketplace-app-b490f.appspot.com",
  messagingSenderId: "132353622015",
  appId: "1:132353622015:web:173b7d98f05e37fcd2b1ca"
};


// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore()