import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import ShowContextProvider from "./Context/Context";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ShowContextProvider>
    <BrowserRouter>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </ShowContextProvider>
);


reportWebVitals();
