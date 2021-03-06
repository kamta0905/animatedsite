import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
