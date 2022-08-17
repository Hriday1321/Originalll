import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCbWHTJgBvQKjA4uZaBNf3vrrSqWZU1Xuw",
    authDomain: "mastordle.firebaseapp.com",
    projectId: "mastordle",
    storageBucket: "mastordle.appspot.com",
    messagingSenderId: "332466745873",
    appId: "1:332466745873:web:aaba68ff2c54219f56f7b0",
    measurementId: "G-5Q4JZ0YWGP"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}