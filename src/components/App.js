import React from 'react';
import Clock from './Clock';
import NoteItem from './NoteItem';
import Button from './Button';

class App extends React.Component {
  render () {
    return (
      <div>
        <Clock />
        <ul>
          <NoteItem />
        </ul>
      </div>
    );
  }
}

export default App;