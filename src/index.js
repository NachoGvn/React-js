import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBybUbFL4jqIC2yJ3vPalz2CY_ehKzCR4A",
  authDomain: "coderhouse-proyecto-ad2aa.firebaseapp.com",
  projectId: "coderhouse-proyecto-ad2aa",
  storageBucket: "coderhouse-proyecto-ad2aa.appspot.com",
  messagingSenderId: "475581732888",
  appId: "1:475581732888:web:1e0ba231f28f2d75ff4b6d",
  measurementId: "G-PR5R4V04JH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
