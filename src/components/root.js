import React, { Component } from 'react';
import App from './App/App';

export default class Root extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <App
        date = "11. 27. 일요일"
        time = "12:47:12"
      />
    );
  }
}
