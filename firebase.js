// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlAQjNdTyicF48FNTzzirzGNd54IdH-jA",
  authDomain: "class-work-89441.firebaseapp.com",
  projectId: "class-work-89441",
  storageBucket: "class-work-89441.appspot.com",
  messagingSenderId: "96299922627",
  appId: "1:96299922627:web:942673253d2da17b8c1e76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
// If you want to use any firebase functionality, you need to initialize it here
export const auth = getAuth(app)