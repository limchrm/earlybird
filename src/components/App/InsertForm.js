import React from 'react';
import firebase from '../../javascripts/firebase';

const WEEK = ['월', '화', '수', '목', '금', '토', '일'];
const itemsRef = firebase.database().ref('items');
const isGoingRef = firebase.database().ref('isGoing');
let now;
let item;

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
    now = new Date();
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

    item = {
      going: this.state.going,
      timeStamp: this.state.timeStamp,
      date: this.state.date,
      time: this.state.time,
      action: this.state.action,
      vehicle: this.state.vehicle,
      vehicleDetail: this.state.vehicleDetail,
    }

    itemsRef.push(item);
  }

  handleDeparture = () => {
    this.getNow();
    this.setState({
      going: true,
      action: '출발',
    });

    item = {
      going: this.state.going,
      timeStamp: this.state.timeStamp,
      date: this.state.date,
      time: this.state.time,
      action: this.state.action
    }

    itemsRef.push(item);
  }

  handleArrival = () => {
    this.getNow();
    this.setState({
      going: false,
      action: '도착',
    });

    item = {
      going: this.state.going,
      timeStamp: this.state.timeStamp,
      date: this.state.date,
      time: this.state.time,
      action: this.state.action
    }

    itemsRef.push(item);
  }

  render() {
    return (
      <div>
        {this.state.going ? (
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

            <select name="action" onChange={this.handleChange}>
              <option>탐</option>
              <option>내림</option>
            </select>

            <button
              onClick={ this.handleClick }
            >지금이야!</button>
          </div>
        ) : null}

        <button type="button" onClick={this.state.going ? this.handleArrival : this.handleDeparture}>
          { this.state.going ? '도착' : '출발' }
        </button>

      </div>
    );
  }
}

export default InsertForm;
