import React from 'react';
import Clock from './Clock';
import Button from './Button';
import NoteItem from './NoteItem';
import update from 'react-addons-update';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: Math.round( Math.random() * 100 ),
      notes: [
        { date: '11. 27. 일', time: '12:00' },
        { date: '11. 26. 토', time: '11:00' },
        { date: '11. 25. 금', time: '10:00' },
        { date: '11. 24. 목', time: '09:00' }
      ]
    }
    this.updateValue = this.updateValue.bind(this);
  }

  updateValue( randomValue ) {
    this.setState({
      value: randomValue
    });
  }

  render () {
    return (
      <div>
        <Clock />
        <Button
          number = { this.state.value }
          onUpdate = { this.updateValue }
        />
        <ul>
        { this.state.notes.map( ( note, i ) => {
          return (
            <NoteItem
              date = { note.date }
              time = { note.time }
              key = { i } 
            />
          );
        }) }
        </ul>
      </div>
    );
  }
}

App.defaultProps = {
  buttonLabel: '이야이야호',
  date: '오널',
  time: '지금'
}

export default App;

/**
 * Restart at https://velopert.com/1015!
 */