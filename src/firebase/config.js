import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBbGtpYlj0niXq53qxJBKWvxnZwF2QjRmM",
    authDomain: "ecommerce-kevin-murphy.firebaseapp.com",
    projectId: "ecommerce-kevin-murphy",
    storageBucket: "ecommerce-kevin-murphy.appspot.com",
    messagingSenderId: "867807228195",
    appId: "1:867807228195:web:d01902a1c80aed773e1c96"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)