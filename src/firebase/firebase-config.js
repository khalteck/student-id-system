import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMndgaTvnvO7WYCFUG4NcbPyl7YfqyP5A",
  authDomain: "student-id-system-be09d.firebaseapp.com",
  projectId: "student-id-system-be09d",
  storageBucket: "student-id-system-be09d.appspot.com",
  messagingSenderId: "191443603451",
  appId: "1:191443603451:web:f792ff745d9af3ae52455e",
  measurementId: "G-6WKHVJ272W",
};

//to initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export const storage = getStorage(app);
