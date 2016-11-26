import React from 'react';
import { connect } from 'react-redux';
import { takeNote } from '../actions';

class Button extends React.Component {

  handleClick = () => {
    this.setState({
      date: '1',
      time: '2'
    });
    this.props.takeNote( state.date, state.time );
  }

  render () {
    return (
      <Button
        type="button"
        onClick={this.handleClick}
      >
        지금이야!
      </Button>
    );
  }
}

let mapDispatchToProps = dispatch => {
  return {
    onClick: ( dateValue, timeValue ) => dispatch( takeNote( dateValue, timeValue ) )
  }
}

Button = connect( undefined, mapDispatchToProps )( Button );

export default Button;