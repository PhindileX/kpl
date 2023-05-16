// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKKxOWHZjeUWXFlnnbMnYvqkaEhpXcgC8",
  authDomain: "kpl1-be416.firebaseapp.com",
  projectId: "kpl1-be416",
  storageBucket: "kpl1-be416.appspot.com",
  messagingSenderId: "724316873817",
  appId: "1:724316873817:web:cd15c7027fc63b5a21fd48",
  measurementId: "G-5ZSHDFSNZ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);