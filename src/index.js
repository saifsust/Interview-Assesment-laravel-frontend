import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './LoginApp';
import './MainApp'
import LoginForm from './LoginApp';
import MainApp from './MainApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
);