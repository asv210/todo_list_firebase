// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoQ0V1x6K4JGNl40ut0EgYTLoe2VlJdeg",
  authDomain: "todo-a0f57.firebaseapp.com",
  projectId: "todo-a0f57",
  storageBucket: "todo-a0f57.appspot.com",
  messagingSenderId: "176919243739",
  appId: "1:176919243739:web:bdcceadef0803cf55595fe",
  measurementId: "G-XYY9BMF2MV",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export default db;
