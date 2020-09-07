import React from 'react';
import Routes from './routes';
import { render } from "react-dom";
import { positions, transitions, Provider } from "react-alert";
import AlertTemplate from 'react-alert-template-basic'

 // App Styles
 import './styles.css';

const options = {
  timeout: 5000,
  position: positions.TOP_CENTER,
  transition: transitions.SCALE
}; 

function App() {
  return (
    <Provider template={AlertTemplate} {...options}>
      <Routes />
    </Provider>
  );
}

export default App;
