import React from 'react';
import update from 'react-addons-update';
import classNames from 'classnames';

const WEEK = ['월', '화', '수', '목', '금', '토', '일'];

function getNow() {
	const now = new Date();
	const currentMonth = now.getMonth() + 1;
	const currentDate = now.getDate();
	const currentDay = now.getDay();
	const currentHours = now.getHours();
	const currentMinutes = now.getMinutes();
  const currentSeconds = now.getSeconds();

	return {
		currentMonth,
		currentDate,
		currentDay,
	 	currentHours,
  	currentMinutes,
    currentSeconds
	};
}

class Clock extends React.Component {
  state = getNow();

  componentDidMount() {
		const displayTime = () => {
		  this.timeoutId = setTimeout( displayTime, 500 );
      this.setState(getNow());
		}
		displayTime();
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutId);
  }

	render() {
		const {
			currentMonth,
			currentDate,
			currentDay,
		 	currentHours,
	  	currentMinutes,
      currentSeconds
		} = this.state;

    return (
      <header>
        <h3>{currentMonth}. {currentDate}. {currentDay}요일</h3>
        <h2>{currentHours} : {currentMinutes} : {currentSeconds}</h2> 
      </header>
    );
  }
}

export default Clock;