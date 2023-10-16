
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCytiaDHD_eyuELF_dTtIoV5WIa_0PQIcE",
  authDomain: "mod57-coffeestore.firebaseapp.com",
  projectId: "mod57-coffeestore",
  storageBucket: "mod57-coffeestore.appspot.com",
  messagingSenderId: "311533594891",
  appId: "1:311533594891:web:164e0b14f0be5f708b9a0e",
  measurementId: "G-TWFNQYM5EB",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;