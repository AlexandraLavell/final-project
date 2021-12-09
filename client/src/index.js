import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from "react-router-dom";


// context provider
import { MainContextProvider } from "./components/MainContext";

// style
import GlobalStyles from "./GlobalStyles";

// main App component
import App from "./components/App";

// main render
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <MainContextProvider>
          <GlobalStyles />
          <App />
      </MainContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
