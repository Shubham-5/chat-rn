import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAwQZOKxYSjLsokN0a6VJ4OKxgXsIP6ZUI",
  authDomain: "rn-chat-app-3e94e.firebaseapp.com",
  projectId: "rn-chat-app-3e94e",
  storageBucket: "rn-chat-app-3e94e.appspot.com",
  messagingSenderId: "315661539505",
  appId: "1:315661539505:web:aa8eaeda27b1609a3daa90",
};
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();
