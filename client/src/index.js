import React from 'react';
import ReactDOM from 'react-dom';


// context provider
import { MainContextProvider } from "./components/MainContext";

// style
import GlobalStyles from "./GlobalStyles";

// main App component
import App from "./components/App";

// main render
ReactDOM.render(
  <React.StrictMode>
    <MainContextProvider>
        {/* <GlobalStyles /> */}
        <App />
    </MainContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
