// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZyMgDHY_14l51fJdF-zvXDk4u1RG-KZc",
  authDomain: "task-management-app-96665.firebaseapp.com",
  projectId: "task-management-app-96665",
  storageBucket: "task-management-app-96665.appspot.com",
  messagingSenderId: "282541945453",
  appId: "1:282541945453:web:26942e8b1d58ea4c630564"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;