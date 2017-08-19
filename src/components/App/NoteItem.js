import React, { PropTypes } from 'react';
import firebase from '../../javascripts/firebase';

export default class NoteItem extends React.Component {
  static propTypes = {
    id: PropTypes.string,
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

  removeNote = itemId => {
    const itemRef = firebase.database().ref(`/items/${itemId}`);
    itemRef.remove();
  }

  render () {
    return (
      <li
        style = { this.getStyle( this.props.isSelected ) }
      >
        <h5>
          { this.props.date } { this.props.time }
        </h5>
        <p>
          { this.props.vehicle } { this.props.vehicleDetail } { this.props.action }
        </p>

        <button onClick={() => this.removeNote( this.props.id ) }></button>
      </li>
    );
  }
}
