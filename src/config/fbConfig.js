import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCZ-cQJvzZF504vLjN2xQq3jKoO_9ojNh8",
  authDomain: "project-planner-1f01f.firebaseapp.com",
  databaseURL: "https://project-planner-1f01f.firebaseio.com",
  projectId: "project-planner-1f01f",
  storageBucket: "project-planner-1f01f.appspot.com",
  messagingSenderId: "1022479232792",
  appId: "1:1022479232792:web:52c78eb0c32f05868b386d",
  measurementId: "G-1DJGHDYQXK",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
