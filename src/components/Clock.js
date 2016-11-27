import React from 'react';
import update from 'react-addons-update';
import classNames from 'classnames';

const WEEK = ['월', '화', '수', '목', '금', '토', '일'];

function getNow() {
	const now = new Date();
	const currentTime = now.toLocaleTimeString('en-GB');
	const currentDate = now.toLocaleDateString() + ' ' + WEEK[ now.getDay() ];

	return {
		currentDate,
		currentTime
	};
}

class Clock extends React.Component {
  state = getNow();

  componentDidMount() {
		const displayTime = () => {
		  this.timeoutId = setTimeout( displayTime, 500 );
      this.setState( getNow() );
		}
		displayTime();
  }

  componentWillUnmount() {
    clearTimeout( this.timeoutId );
  }

	render() {
		const {
			currentDate,
			currentTime
		} = this.state;

    return (
      <header>
        <h3>{currentDate}</h3>
        <h2>{currentTime}</h2> 
      </header>
    );
  }
}

export default Clock;