import * as types from '../actions/actionTypes';
var Sound = require('react-native-sound');

const initialState = {
  currentSound: "none",
  sound: new Sound('brownnoise.wav', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
    } else { // loaded successfully
    }
  })
};

export default function sound(state = initialState, action = {}) {
  switch (action.type) {
    case types.SOUND_SELECT:
      state.sound.release();
      state.sound.setNumberOfLoops(-1);
      if ( action.sound != "none" ) {
        state.sound = new Sound(action.sound, Sound.MAIN_BUNDLE, (error) => {
          state.sound.setNumberOfLoops(-1);
          if (error) {
          } else { // loaded successfully
            state.sound.play((success) => {
              if (success) {
                state.sound.setNumberOfLoops(-1);
              } else {
              }
            });
          }
        });
        return {
          ...state,
          currentSound: action.sound
        };
      } else {
        return {
          ...state,
          currentSound: action.sound
        };
      }
    case types.TIMER_COMPLETE:
      state.sound.release();
      var bellSound = new Sound('bell.wav', Sound.MAIN_BUNDLE, (error) => {
          bellSound.setNumberOfLoops(0);
          if (error) {
          } else { // loaded successfully
            bellSound.play((success) => {
              if (success) {
                bellSound.setNumberOfLoops(0);
              } else {
              }
            });
          }
        });
 
      return {
        ...state,
        currentSound: 'none'
      };
    default:
      return state;
  }
}

