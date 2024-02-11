// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsdNzFvQC2K95yDsESVYEruXiZl8k11Bg",
  authDomain: "bookswap-d6dcd.firebaseapp.com",
  projectId: "bookswap-d6dcd",
  storageBucket: "bookswap-d6dcd.appspot.com",
  messagingSenderId: "693029530151",
  appId: "1:693029530151:web:2bdd23923a293e086efc02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;