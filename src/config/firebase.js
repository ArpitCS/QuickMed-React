import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDjsu5W2qG9ezC-qcSZ4h16xG4tTMxUQtY",
  authDomain: "quick-med-fee.firebaseapp.com",
  databaseURL: "https://quick-med-fee-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "quick-med-fee",
  storageBucket: "quick-med-fee.firebasestorage.app",
  messagingSenderId: "723721140422",
  appId: "1:723721140422:web:2df3ed4ff8a4c503a67fc7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, doc, getDoc };