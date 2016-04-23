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
    case types.START_BUTTON_PRESSED:
      return {
        ...state,
        time: parseInt(action.currentTime) / 60 + ''
      };
    default:
      return state;
  }
}
