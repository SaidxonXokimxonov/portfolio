import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAmDwo7kjAnZ2IJKwtHC-jxt2HU-dE50mY",
  authDomain: "my-portfolio-website-154e5.firebaseapp.com",
  projectId: "my-portfolio-website-154e5",
  storageBucket: "my-portfolio-website-154e5.firebasestorage.app",
  messagingSenderId: "181451604354",
  appId: "1:181451604354:web:6c379db266dbc5a9448f9b",
  measurementId: "G-ELQX54N9DC"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)