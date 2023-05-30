import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';
import './index.css'

import {
    Login,
    Register,
    Calc,
} from './components';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<Router>
  <Routes>
      <Route path="/" element={ <Login />} />
      <Route path="/register" element={ <Register />} />
      <Route path="/calc" element={ <Calc />} />

  </Routes>
</Router>
);

reportWebVitals();
