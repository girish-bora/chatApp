import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchatapp-b17c7.firebaseapp.com",
  projectId: "reactchatapp-b17c7",
  storageBucket: "reactchatapp-b17c7.appspot.com",
  messagingSenderId: "319732823125",
  appId: "1:319732823125:web:17b9763a2f1cbcaa7ad0dc",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
