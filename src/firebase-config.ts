import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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

// Initialize Firebase Authentication and export it
const auth = getAuth(app);

export { auth }; // export auth object for use in other files
