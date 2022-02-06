import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { FlightContextProvider } from './context/flightContext'

ReactDOM.render(
  <React.StrictMode>
    <FlightContextProvider>
      <App />
    </FlightContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
