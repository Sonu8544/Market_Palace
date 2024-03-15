// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrswPVkOEw3E7g9CAaaClZnmxi5D69C7I",
  authDomain: "bazar-63190.firebaseapp.com",
  projectId: "bazar-63190",
  storageBucket: "bazar-63190.appspot.com",
  messagingSenderId: "908604980499",
  appId: "1:908604980499:web:b07d49428ba2fa9de3aee6",
  measurementId: "G-SJKK050SZM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
