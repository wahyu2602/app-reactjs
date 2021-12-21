// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYOJV9vl9IW_7fHxQzlMrVB_oBPMR6gIQ",
  authDomain: "copper-seeker-277918.firebaseapp.com",
  databaseURL: "https://copper-seeker-277918-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "copper-seeker-277918",
  storageBucket: "copper-seeker-277918.appspot.com",
  messagingSenderId: "827913280243",
  appId: "1:827913280243:web:381b831d5d1fe3916cb586",
  measurementId: "G-YQ2R7WT4ST"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app;