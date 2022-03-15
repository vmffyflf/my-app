import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import MainPage from "./page/assignment/MainPage";


ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
        <MainPage/>

      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
