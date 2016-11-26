import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';

class NoteItem extends React.Component {
  render () {

    return (
      <li className={ this.props.id }>
        { this.props.date }
        { this.props.time }
        { this.props.text }
      </li>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    value: state.taker.value
  };
};

NoteItem = connect( mapStateToProps )( NoteItem );

export default NoteItem;