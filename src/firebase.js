// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCscKUUZqFG3qqMeonOhgd0o0ip-ilb12Y",
  authDomain: "react-fb-auth-1c646.firebaseapp.com",
  projectId: "react-fb-auth-1c646",
  storageBucket: "react-fb-auth-1c646.appspot.com",
  messagingSenderId: "748155381753",
  appId: "1:748155381753:web:3e664c45b699eb7a29ff28"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)