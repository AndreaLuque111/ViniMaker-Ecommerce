import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDTwSFDGPa3OPZfzfn9r6ZilN7SN58eLug",
  authDomain: "vinimaker-ecommerce.firebaseapp.com",
  projectId: "vinimaker-ecommerce",
  storageBucket: "vinimaker-ecommerce.appspot.com",
  messagingSenderId: "930881939949",
  appId: "1:930881939949:web:17e8a34ff571ccb59e5fe4"
};



export const app = initializeApp(firebaseConfig);
