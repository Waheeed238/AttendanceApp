import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // You can add any global styles here
import App from './App'; // Import the main App component
import reportWebVitals from './reportWebVitals'; // Optional: for performance reporting

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals(); // Optional: This is used for measuring performance.
