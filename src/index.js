import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainPage from './Pages/MainPage';
import {LanguageProvider} from './Store/LanguageContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <LanguageProvider>
    <React.StrictMode>
      <MainPage />
    </React.StrictMode>
  </LanguageProvider>
);
