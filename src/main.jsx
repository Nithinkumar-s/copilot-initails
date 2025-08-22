import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { RecordsProvider } from './context/RecordsContext';
import { NavDataProvider } from './context/NavDataContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <RecordsProvider>
        <NavDataProvider>
          <App />
        </NavDataProvider>
      </RecordsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
