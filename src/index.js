import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';      //default export from App.js, so we can name it anything we want, but we will use App for clarity

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

