import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style.css';
import '@babel/polyfill';

if (process.env.NODE_ENV === 'development') {
    const axe = require('react-axe');
    axe(React, ReactDOM, 1000);
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>    
    , document.getElementById('app'));
