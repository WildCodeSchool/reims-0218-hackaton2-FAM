import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Systemrouter from './Router';
import 'bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Systemrouter />, document.getElementById('root'));
registerServiceWorker();
