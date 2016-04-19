import * as types from './actionTypes';

export function timerInputUpdate(time) {
  return {
    time: time,
    type: types.TIMER_INPUT_UPDATE
  };
}

export function startButtonPressed(time) {
  return {
    currentTime: time,
    type: types.START_BUTTON_PRESSED
  };
}

export function timerDecrement(remainingTime) {
  return {
    remainingTime: (parseInt(remainingTime) - 1) + '',
    type: types.TIMER_DECREMENT
  };
}

export function timerComplete() {
  return {
    type: types.TIMER_COMPLETE
  };
}

export function soundSelected(sound) {
  return {
    sound: sound,
    type: types.SOUND_SELECT
  };
}
