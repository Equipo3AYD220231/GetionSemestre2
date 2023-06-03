// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDW3gavhq5mbe9Ofl74AreOoRZfNiKJr8w",
  authDomain: "my-test-project-3d368.firebaseapp.com",
  projectId: "my-test-project-3d368",
  storageBucket: "my-test-project-3d368.appspot.com",
  messagingSenderId: "1079635501638",
  appId: "1:1079635501638:web:7ee6b3458ac5713ebf6047",
  measurementId: "G-5T25Z66LB8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);