import React from 'react';

class NoteItem extends React.Component {

  getStyle = isSelected => {
    if ( !isSelected ) return;

    let style = {
      color: '#00a2d1',
      backgroundColor: '#f1f1f1'
    }

    return style;
  };

  handleClick = () => {
    this.props.onSelect( this.props.noteKey );
  }

  render () {
    return (
      <li
        onClick = { this.handleClick }
        style = { this.getStyle( this.props.isSelected ) }
      >
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