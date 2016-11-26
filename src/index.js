import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import earlyBirdReducer from './reducers';

const store = createStore( earlyBirdReducer );
const appEarlyBird = document.getElementById('app');

ReactDOM.render(
	<Provider store={ store }>
    <App />
  </Provider>,
	appEarlyBird
);
