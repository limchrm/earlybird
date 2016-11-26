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

	return {
		currentMonth,
		currentDate,
		currentDay,
	 	currentHours,
  	currentMinutes,
	};
}

class EarlyBird extends React.Component {
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
		} = this.state;

		return (
			<section className="eb-date-wrap" id="eb-date-wrap">
				<h3>{currentMonth}월 {currentDate}일 {WEEK[currentDay]}요일</h3>
				<h2>{currentHours}<span className="time-divider">:</span>{currentMinutes}</h2>
			</section>
		);
	}
}

export default EarlyBird;
