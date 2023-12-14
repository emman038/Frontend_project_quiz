import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './css/QuizContainer.css';

const fs = require('fs');

// Read the configuration file
const rawConfig = fs.readFileSync('config.json');
const config = JSON.parse(rawConfig);
// Access the API key
const apiKey = config.apiKey;
// Use apiKey in your application

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
