import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCA0b5VlL0G0Ypc0xgUVwkYEkore5_jrhc",
  authDomain: "dalle-hx.firebaseapp.com",
  projectId: "dalle-hx",
  storageBucket: "dalle-hx.appspot.com",
  messagingSenderId: "393096386621",
  appId: "1:393096386621:web:304f7d50f1132f799ff254",
  measurementId: "G-SBX6J2FFN5"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);