import React from 'react';  
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';


import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/@fortawesome//fontawesome-free/css/all.css';

import App from './components/app';

ReactDOM.render(<App/>,
  document.querySelector('#root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
