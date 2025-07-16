import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

const gmailTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#d93025',
    },
    secondary: {
      main: '#1a73e8', 
    },
    background: {
      default: '#f1f3f4', 
      paper: '#fff',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={gmailTheme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);
