import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';

const DarkTheme = {
  textColor:"whiteSmoke",
  bgColor:"black"
}

const LightTheme = {
  textColor:"black",
  bgColor:"pink"
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={LightTheme}>
    <App />
    </ThemeProvider>
    
  </React.StrictMode>
);
