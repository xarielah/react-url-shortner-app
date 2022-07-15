import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MainLayout from './components/layout/MainLayout';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MainLayout>
      <App />
    </MainLayout>
  </React.StrictMode>
);
