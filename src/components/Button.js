import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.updateNumber = this.updateNumber.bind(this);
  }

  updateNumber() {
    let value = Math.round( Math.random() * 100 );
    this.props.onUpdate( value );
  }

  render() {
    return (
      <div>
        <h1>{ this.props.number }</h1>
        <button
          type = "button"
          onClick = { this.updateNumber }
        >
          지금이야!
        </button>
      </div>
    );
  }
}

export default Button;