import * as types from '../actions/actionTypes';
var Sound = require('react-native-sound');

const initialState = {
  currentSound: "none",
  sound: new Sound('brownnoise.wav', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log('failed to load the sound', error);
    } else { // loaded successfully
    }
  })
};

export default function sound(state = initialState, action = {}) {
  switch (action.type) {
    case types.SOUND_SELECT:
      state.sound.release();
      if ( action.sound != "none" ) {
        var newSound = new Sound(action.sound, Sound.MAIN_BUNDLE, (error) => {
          if (error) {
            console.log('failed to load the sound', error);
          } else { // loaded successfully
            state.sound = newSound;
            state.sound.play((success) => {
              if (success) {
                console.log('successfully finished playing');
                state.sound.setNumberOfLoops(-1);
              } else {
                console.log('playback failed due to audio decoding errors');
              }
              return {
                ...state,
                currentSound: action.sound
              };
            });
          }
        });
      } else {
        return {
          ...state,
          currentSound: action.sound
        };
      }

    default:
      return state;
  }
}

