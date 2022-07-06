import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAhSdiW4lhAP8TAhSq09svKz2J4fXBuebo",
  authDomain: "crwn-clothing-705b6.firebaseapp.com",
  projectId: "crwn-clothing-705b6",
  storageBucket: "crwn-clothing-705b6.appspot.com",
  messagingSenderId: "448388158366",
  appId: "1:448388158366:web:74d571fdbb318fac6c3c8f",
};

export const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signinAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutAuthUser = async() => {
  return await signOut(auth)
}

export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged( auth, callback )
}

export const fireStoreDb = getFirestore();
