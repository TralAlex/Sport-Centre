
// Filename - "./components/Navbar.js
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />


import ReactDOM from 'react-dom/client';
// Filename - "index.js"

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Ako imaš stilove, ovde ih uvoziš
import App from './App'; // Uvoz glavne aplikacije
import reportWebVitals from './reportWebVitals'; // Ako koristiš ovaj alat

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />  {/* Pozivanje App komponente */}
  </React.StrictMode>
);

reportWebVitals(); // Ako koristiš ovaj alat za merenje performansi

