// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

//https://firebase.google.com/docs/reference/js/?hl=en&authuser=0&_gl=1*r8adeo*_ga*MjA4MjUxNDI2MS4xNzI5MjI5MzUy*_ga_CW55HF8NVT*MTcyOTIyOTM1Mi4xLjEuMTcyOTIzMDM2Ni4xMy4wLjA. -
//ABove link is API reference

const firebaseConfig = {
  apiKey: "AIzaSyAVvT7zDNBtIpvwEbny11SOGqMqsyB-SXE",
  authDomain: "netflixgpt-7ceb6.firebaseapp.com",
  projectId: "netflixgpt-7ceb6",
  storageBucket: "netflixgpt-7ceb6.appspot.com",
  messagingSenderId: "118909780501",
  appId: "1:118909780501:web:0045c314dad156cd53041c",
  measurementId: "G-1PE23J9YXC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

//https://console.firebase.google.com/project/netflixgpt-7ceb6/overview