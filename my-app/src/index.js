import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from '@emotion/react';
import { theme } from './theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* wrapping the app.js component in the themeprovider, so that to use the theme in app.js */}

    <App />
  </React.StrictMode>
);


