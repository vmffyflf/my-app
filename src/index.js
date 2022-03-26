import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Display from "./page/assignment/Display";


ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
        <Display />

      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
