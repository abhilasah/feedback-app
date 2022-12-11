// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBo3wgtgiUa17JnBRKDAJTM3JBI-AeLRTU",
  authDomain: "townhall-feedback-survey.firebaseapp.com",
  projectId: "townhall-feedback-survey",
  storageBucket: "townhall-feedback-survey.appspot.com",
  messagingSenderId: "820882081463",
  appId: "1:820882081463:web:35e3c24dbd4ab135acef32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export default db;