// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmA_Cbt6enHE2w4XVmlAjN6xujW4vlU2s",
  authDomain: "my-news-paper-b6269.firebaseapp.com",
  projectId: "my-news-paper-b6269",
  storageBucket: "my-news-paper-b6269.appspot.com",
  messagingSenderId: "477795001281",
  appId: "1:477795001281:web:6c37124170540e76750540"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;