import { initializeApp } from "firebase/app";

import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCKyo0pCD7CMsJrZmvRSRfMLTStuHTmPL4",
  authDomain: "hospital-hand-tools.firebaseapp.com",
  projectId: "hospital-hand-tools",
  storageBucket: "hospital-hand-tools.appspot.com",
  messagingSenderId: "646810446617",
  appId: "1:646810446617:web:0714d562187f9e94b93388",
  measurementId: "G-346BE6PQ5X",
};
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const SignInWithGooglePopUp = () => signInWithPopup(auth, provider);
export const db = getFirestore();
export const userDocument = async (userAuth, additionalField = {}) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalField,
      });
    } catch (error) {
      console.log("Error Created the user", error.message);
    }

    return userDocRef;
  }
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};
export const UserSignOut = async () => {
  return await signOut(auth);
};
export const onAuthStateChangedListner = (callback) => {
  onAuthStateChanged(auth, callback);
};
