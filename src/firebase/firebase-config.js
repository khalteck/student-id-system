import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrQi4bllBTY0etiUDHg03XnX_VXFBiGr8",
  authDomain: "student-id-system-3e0ae.firebaseapp.com",
  projectId: "student-id-system-3e0ae",
  storageBucket: "student-id-system-3e0ae.appspot.com",
  messagingSenderId: "486334189976",
  appId: "1:486334189976:web:ff93179b8431f8e7759bed",
};

//to initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export const storage = getStorage(app);
