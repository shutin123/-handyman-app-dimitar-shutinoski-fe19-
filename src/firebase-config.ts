import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgRcCck293awtm3XR8MbwTHXW832NJkz8",
  authDomain: "handyman-app-ds-fe19.firebaseapp.com",
  projectId: "handyman-app-ds-fe19",
  storageBucket: "handyman-app-ds-fe19.appspot.com",
  messagingSenderId: "1096845490593",
  appId: "1:1096845490593:web:6854aa9b171c6dd6a8b3e0",
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Create Google provider
const provider = new GoogleAuthProvider();

export { auth, provider }; // export both auth and provider
