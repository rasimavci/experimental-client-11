import React from 'react';
import ReactDOM from 'react-dom';
import Framework7 from 'framework7/framework7.esm.bundle';
import Framework7React from 'framework7-react';
import Framework7Keypad from 'framework7-plugin-keypad';
import App from './components/App.jsx';

import 'framework7/css/framework7.min.css';
import './css/app.css';
import './css/icons.css';
import './css/framework7.keypad.min.css';


Framework7.use(Framework7React);
Framework7.use(Framework7Keypad);

// Mount React App
ReactDOM.render(
  React.createElement(App),
  document.getElementById('app'),
);
