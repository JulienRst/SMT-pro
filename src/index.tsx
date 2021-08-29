import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './pages/landing';
import 'ui/reset.scss';
import './translations';

ReactDOM.render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>,
  document.getElementById('root')
);
