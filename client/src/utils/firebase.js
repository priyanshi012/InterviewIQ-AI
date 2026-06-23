
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "interviewiq-2d94d.firebaseapp.com",
  projectId: "interviewiq-2d94d",
  storageBucket: "interviewiq-2d94d.firebasestorage.app",
  messagingSenderId: "176600029450",
  appId: "1:176600029450:web:db587c612afe3748fb02f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider()
export {auth,provider}