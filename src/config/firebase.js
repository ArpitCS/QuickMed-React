import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

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

const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log(user);
  } catch (error) {
    console.log(error);
  }
};

const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log(user);
    return user; // Ensure you return the user
  } catch (error) {
    console.log(error);
    throw error; // Rethrow the error to be handled in Login.js
  }
}

const logOut = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.log(error);
  }
}

export { auth, db, doc, getDoc, signUp, signIn, logOut };