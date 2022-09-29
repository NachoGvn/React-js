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
  apiKey: "AIzaSyBZ4GJoB35ioUb4xKuxhbahIjSwvcFxBA0",
  authDomain: "coderhouse-ecommerce-8e05e.firebaseapp.com",
  projectId: "coderhouse-ecommerce-8e05e",
  storageBucket: "coderhouse-ecommerce-8e05e.appspot.com",
  messagingSenderId: "279628071846",
  appId: "1:279628071846:web:116a8d0cee16a1e47c4567"
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
