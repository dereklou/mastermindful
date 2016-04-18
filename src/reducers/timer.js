import * as types from '../actions/actionTypes';

const initialState = {
  counting: false,
  remainingTime: 20
};

export default function timer(state = initialState, action = {}) {
  switch (action.type) {
    case types.START_BUTTON_PRESSED:
      var newCounting = !state.counting
      return {
        ...state,
        counting: newCounting,
        remainingTime: action.currentTime
      };
    case types.TIMER_DECREMENT:
      return {
        ...state,
        remainingTime: action.remainingTime
      };
    case types.TIMER_COMPLETE:
      return {
        ...state,
        counting: false
      };
    default:
      return state;
  }
}
