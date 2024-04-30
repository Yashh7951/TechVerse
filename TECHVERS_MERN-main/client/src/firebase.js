// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_AUTH_KEY,
  authDomain: 'techverse-55168.firebaseapp.com',
  projectId: 'techverse-55168',
  storageBucket: 'techverse-55168.appspot.com',
  messagingSenderId: '791516715693',
  appId: '1:791516715693:web:1d14f75edad2d350ac8424',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
