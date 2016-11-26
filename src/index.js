import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <App
    date = "11. 27. 일요일"
    time = "12:47:12"
  />,
  rootElement
);