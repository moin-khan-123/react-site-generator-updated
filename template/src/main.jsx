import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import siteData from './siteData.json';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App data={siteData} />
  </React.StrictMode>
);
