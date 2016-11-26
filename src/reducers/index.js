import { TAKE_NOTE } from '../actions';
import { combineReducers } from 'redux';

const initialState = {
  id: 0,
  date: '2016. 11. 26. 토',
  time: '21:39:01',
  text: '휴햐'
};

const taker = ( state = initialState, action ) => {
  switch ( action.type ) {
    case TAKE_NOTE:
      return [
        {
          id: 1,
          date: action.date,
          time: action.time,
          text: '휴햐퓨퍄'
        },
        ...state
      ];

    default:
      return state;
  }
};

const earlyBirdReducer = combineReducers({
  taker
});

export default earlyBirdReducer;