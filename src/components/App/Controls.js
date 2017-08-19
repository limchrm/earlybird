import React from 'react';

class Controls extends React.Component {

  handleClick = () => {
    this.props.onRemove();
  }

  render() {
    return (
      <button onClick = { this.handleClick }>
        파괘한다
      </button>
    );
  }
}

export default Controls;