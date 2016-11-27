import React, { PropTypes } from 'react';

export default class NoteItem extends React.Component {
  static propTypes = {
    date: PropTypes.string,
    time: PropTypes.string,
    vehicle: PropTypes.string,
    vehicleDetail: PropTypes.string,
    action: PropTypes.string,
  }

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
        <h5>
          { this.props.date } 
          { this.props.time }
        </h5>
        <p>
          { this.props.vehicle }
          { this.props.vehicleDetail }
          { this.props.action }
        </p>
      </li>
    );
  }
}
