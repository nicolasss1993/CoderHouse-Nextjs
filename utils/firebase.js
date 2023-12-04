import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3q31uFATrJG-7qDsEECLdvvr9CqvJfoQ",
  authDomain: "nextjs-coderhosue.firebaseapp.com",
  projectId: "nextjs-coderhosue",
  storageBucket: "nextjs-coderhosue.appspot.com",
  messagingSenderId: "242186610564",
  appId: "1:242186610564:web:bcbf6e1245dad42fab5fd1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
