import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA6rFNMZFUPnRMR86jRmj0DLwmv65NmjqM",
    authDomain: "projeto-teste-firebase-7dba1.firebaseapp.com",
    projectId: "projeto-teste-firebase-7dba1",
    storageBucket: "projeto-teste-firebase-7dba1.appspot.com",
    messagingSenderId: "369660360978",
    appId: "1:369660360978:web:752d5b711a2f824fe5dbcb",
    measurementId: "G-ZE9STKCN2L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);