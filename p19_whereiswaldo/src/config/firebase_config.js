// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {getAuth} from "firebase/auth";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFw3LukiHnflW07kJgcj0MI8ug-F0NUD0",
  authDomain: "odinwhere-swaldo.firebaseapp.com",
  databaseURL: "https://odinwhere-swaldo-default-rtdb.firebaseio.com",
  projectId: "odinwhere-swaldo",
  storageBucket: "odinwhere-swaldo.appspot.com",
  messagingSenderId: "40749224581",
  appId: "1:40749224581:web:50312935f20f590a074fec",
  measurementId: "G-W4YWWEQLS4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const database = getDatabase(app);
