import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { AuthProvider } from './contexts/AuthProvider';
import { AuthLoadingProvider } from './contexts/AuthLoadingProvider'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <AuthLoadingProvider>
        <App />
      </AuthLoadingProvider>
    </AuthProvider>
  </React.StrictMode>
)
