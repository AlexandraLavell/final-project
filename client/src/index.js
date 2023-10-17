import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import { MainContextProvider } from "./components/MainContext";
import GlobalStyles from "./GlobalStyles";
import App from "./components/App";

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <MainContextProvider>
        <GlobalStyles />
        <App />
      </MainContextProvider>
    </Router>
  </React.StrictMode>
);
