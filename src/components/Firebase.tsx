// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtIxdcnWsmVC0Xrl05C7edAZ9JgO_AULE",
  authDomain: "scriptee-591ba.firebaseapp.com",
  projectId: "scriptee-591ba",
  storageBucket: "scriptee-591ba.firebasestorage.app",
  messagingSenderId: "983468547059",
  appId: "1:983468547059:web:4e6df92b3d6290c11ed086",
  measurementId: "G-LFPJG59Q9R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export default app;
