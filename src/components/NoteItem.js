import React from 'react';

class NoteItem extends React.Component {
  render () {
    return (
      <li>
        <h5>{ this.props.date }</h5>
        <p>{ this.props.time }</p>
      </li>
    );
  }
}

NoteItem.propTypes = {
  date: React.PropTypes.string,
  time: React.PropTypes.string,
}

export default NoteItem;