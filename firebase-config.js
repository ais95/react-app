// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5NUR0gG5EFkZF2gmYP_U01tE4Kqt0Ctc",
  authDomain: "civic-surge-342505.firebaseapp.com",
  projectId: "civic-surge-342505",
  storageBucket: "civic-surge-342505.appspot.com",
  messagingSenderId: "54889963621",
  appId: "1:54889963621:web:12f5cfc19e88b09a21668c",
  measurementId: "G-W1W01BLD2J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);