// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIbLFqemOJBkQ8SMsBnxeBcusE493tVoM",
  authDomain: "swiggy-dupe.firebaseapp.com",
  projectId: "swiggy-dupe",
  storageBucket: "swiggy-dupe.firebasestorage.app",
  messagingSenderId: "1026920418749",
  appId: "1:1026920418749:web:b7a0756e8fbcefcca516d4",
  measurementId: "G-9713Y4G4BV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
