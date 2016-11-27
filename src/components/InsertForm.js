import React from 'react';

const WEEK = ['월', '화', '수', '목', '금', '토', '일'];

class InsertForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      going: false,
      timeStamp: '',
      date: '',
      time: '',
      action: '',
      vehicle: '',
      vehicleDetail: '',
    }
  }
  
  getNow = () => {
    const now = new Date();

    this.setState({
      timeStamp: Math.floor( now ),
      date: now.toLocaleDateString() + ' ' + WEEK[ now.getDay() ],
      time: now.toLocaleTimeString('en-GB')
    });
  }

  handleChange = e => {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState( nextState );
  }

  handleClick = () => {
    this.getNow();
    this.props.onInsert(
      this.state.timeStamp,
      this.state.date,
      this.state.time,
      this.state.action,
      this.state.vehicle,
      this.state.vehicleDetail,
    );
  }
  handleDeparture = () => {
    this.getNow();
    this.setState({
      going: true,
      action: '출발',
    });
    console.log ( this.state );
    this.props.onInsert(
      this.state.timeStamp,
      this.state.date,
      this.state.time,
      this.state.action,
    );
  }
  handleArrival = () => {
    this.getNow();
    this.setState({
      going: false,
      action: '도착',
    });
    console.log ( this.state );
    this.props.onInsert(
      this.state.timeStamp,
      this.state.date,
      this.state.time,
      this.state.action,
    );
  }

  render() {
    console.log ( this.state );
    let element;
    if ( this.state.going ) {
      element = (
        <div>
          <select
            name = "vehicle"
            onChange = { this.handleChange }
          >
            <option></option>
            <option>버스</option>
            <option>지하철</option>
          </select>

          <input
            type = "text"
            name = "vehicleDetail"
            placeholder = "vehicleDetail"
            value = { this.state.vehicleDetail }
            onChange = { this.handleChange }
          />

          <select
            name = "action"
            onChange = { this.handleChange }
          >
            <option>탐</option>
            <option>내림</option>
          </select>

          <button
            type = "button"
            onClick = { this.handleClick }
          >
            지금이야!
          </button>
          <button
            type = "button"
            onClick = { this.handleArrival }
          >
            도착
          </button>
        </div>
      );
    } else {
      element = (
        <button
          type = "button"
          onClick = { this.handleDeparture }
        >
         출발
        </button>
      );
    }

    return (
      <div>
        { element }
      </div>
    );
  }
}

export default InsertForm;