import * as types from '../actions/actionTypes';

const initialState = {
  time: '10',
};

export default function timerInput(state = initialState, action = {}) {
  switch (action.type) {
    case types.TIMER_INPUT_UPDATE:
      return {
        ...state,
        time: action.time,
      };
    default:
      return state;
  }
}
