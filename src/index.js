import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import './index.css';
import StoreContextProvider from './context/StoreContext.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StoreContextProvider>
      <App/>
    </StoreContextProvider>
  </React.StrictMode>
);