import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6uJzC44GfxZ3LSVuTGX83YMHVjwwdL6w",
  authDomain: "distribuidora-del-abasto.firebaseapp.com",
  projectId: "distribuidora-del-abasto",
  storageBucket: "distribuidora-del-abasto.appspot.com",
  messagingSenderId: "582856638637",
  appId: "1:582856638637:web:6dfafdc7f306a1993fc624",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
