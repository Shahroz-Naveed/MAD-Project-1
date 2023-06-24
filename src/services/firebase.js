// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCemV1YsD3N93wnmIRFajlDX9To67lHc9w",
  authDomain: "myfirstapp-4cddf.firebaseapp.com",
  projectId: "myfirstapp-4cddf",
  storageBucket: "myfirstapp-4cddf.appspot.com",
  messagingSenderId: "373832883252",
  appId: "1:373832883252:web:e5304ce2e2722ff87b3e61",
  measurementId: "G-T1D442H9TS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app ;