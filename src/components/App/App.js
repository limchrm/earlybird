import React, { Component } from 'react';
import update from 'react-addons-update';
import firebase from '../../javascripts/firebase';

import Clock from './Clock';
import InsertForm from './InsertForm';
import Controls from './Controls';
import NoteItem from './NoteItem';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      selectedKey: -1,
      isGoing: false,
    }
  }

  componentDidMount() {
    const itemsRef = firebase.database().ref('items');

    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      let itemsLength = items.length;


      for (let item in items) {
        newState.push({
          id: item,
          going: items[item].going,
          timeStamp: items[item].timeStamp,
          date: items[item].date,
          time: items[item].time,
          action: items[item].action,
          vehicle: items[item].vehicle,
          vehicleDetail: items[item].vehicleDetail,
        });
      }
      this.setState({
        notes: newState
      });
      console.log( items[1] );
    });
  }

  render () {
    return (
      <div>
        <Clock />
        <InsertForm/>

        <ul>
          {this.state.notes.reverse().map( ( note, i ) => (
            <NoteItem
              key={i}
              id={note.id}
              timeStamp={note.timeStamp}
              date={note.date}
              time={note.time}
              vehicle={note.vehicle}
              vehicleDetail={note.vehicleDetail}
              action={note.action}
            />
          ))}
        </ul>
      </div>
    );
  }
}


App.defaultProps = {
  date: '오널',
  time: '지금'
}

export default App;

/**
 * Restart at https://velopert.com/1015!
 */
