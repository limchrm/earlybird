import React from 'react';

class InsertForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: 'dldl',
      time: 'didi'
    }
  }

  updateNumber = () => {
    let value = Math.round( Math.random() * 100 );
    this.props.onUpdate( value );
  }

  handleChange = e => {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState( nextState );
  }

  handleClick = () => {
    this.props.onInsert( this.state.date, this.state.time );
    this.setState({
      date: '',
      time: ''
    });
  }

  render() {
    return (
      <div>
        <h1>{ this.props.number }</h1>
        <input
          type = "text"
          name = "date"
          placeholder = "date"
          value = { this.state.date }
          onChange = { this.handleChange }
        />
        <input
          type = "text"
          name = "time"
          placeholder = "time"
          value = { this.state.time }
          onChange = { this.handleChange }
        />
        <button
          type = "button"
          onClick = { this.handleClick }
        >
          지금이야!
        </button>
      </div>
    );
  }
}

export default InsertForm;