import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// @ts-ignore: Vite provides CSS module declarations for bundled styles.
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
