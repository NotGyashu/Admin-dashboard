// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const apiKey = process.env.REACT_APP_FIREBASE_KEY?.toString();





const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "admindashboard-419f4.firebaseapp.com",
  projectId: "admindashboard-419f4",
  storageBucket: "admindashboard-419f4.appspot.com",
  messagingSenderId: "116902429235",
  appId: "1:116902429235:web:3f87d0e61dbc5c33735946",
  measurementId: "G-FFFN0DJ0T7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Now you can use Firebase services like authentication
export const auth = getAuth(app); // Pass the app instance to getAuth

// Rest of your code...
export const storage = getStorage(app);