import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './resources/css/app.css';
import Routes from './Routes';

import './firebase';

const App = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));
