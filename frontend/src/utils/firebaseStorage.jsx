// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEchYEnCZr_bM2uIhrZpSZEWddOn2_zuE",
  authDomain: "finaldemo-8c3cf.firebaseapp.com",
  projectId: "finaldemo-8c3cf",
  storageBucket: "finaldemo-8c3cf.appspot.com",
  messagingSenderId: "672749220197",
  appId: "1:672749220197:web:603bac021c4f864dd2318c",
  measurementId: "G-75YCK6BC33",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const storage = getStorage(app);
export default storage;
