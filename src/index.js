import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// To render a React element into a root DOM node, pass both to ReactDOM.render():
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
