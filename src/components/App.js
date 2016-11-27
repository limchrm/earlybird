import React from 'react';
import Clock from './Clock';
import InsertForm from './InsertForm';
import Controls from './Controls';
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
      ],
      selectedKey: -1
    }
    this.updateValue = this.updateValue.bind(this);
  }

  updateValue( randomValue ) {
    this.setState({
      value: randomValue
    });
  }

  _insertNote( dateValue, timeValue ) {
    if ( !dateValue || !timeValue ) return;
    let newState = update( this.state, {
      notes: {
        $push: [{ date: dateValue, time: timeValue }]
      }
    });
    this.setState( newState );
  }

  _onSelect( key ) {
    if ( key == this.state.selectedKey ) {
      console.log( 'select cancelled' );
      this.setState({ selectedKey: -1 });
      return;
    }
    console.log( key + 'is selected' );
    this.setState({
      selectedKey: key
    });
  }

  _isSelected( key ) {
    if ( this.state.selectedKey == key )
      return true;
    else
      return false;
  }

  _removeNote() {
    if ( this.state.selectedKey == -1 ) return;
    this.setState({
      notes: update(
        this.state.notes,
        { $splice: [[ this.state.selectedKey, 1 ]] }
      ),
      selectedKey: -1
    })
  }

  render () {
    return (
      <div>
        <Clock />
        
        <InsertForm
          onInsert = { this._insertNote.bind(this) }
        />

        <Controls
          onRemove = { this._removeNote.bind(this) }
        />

        <ul>
        { this.state.notes.map( ( note, i ) => {
          return (
            <NoteItem
              date = { note.date }
              time = { note.time }
              key = { i }
              noteKey = { i }
              isSelected = { this._isSelected.bind(this)(i) }
              onSelect = { this._onSelect.bind(this) } 
            />
          );
        }) }
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