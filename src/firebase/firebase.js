import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAd9thrSf5u0cSyPhH6ZOnlUQfHe-nEw2A",
    authDomain: "portfolio-970f4.firebaseapp.com",
    projectId: "portfolio-970f4",
    storageBucket: "portfolio-970f4.appspot.com",
    messagingSenderId: "9220377325",
    appId: "1:9220377325:web:45aa158ba0cf1b05465ae4"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getFirestore(app);


/*

const storage = firebase.storage(); */

export {database}