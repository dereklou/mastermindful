'use strict';
import React, {
  StyleSheet,
} from 'react-native';

const TimerInputCSS = StyleSheet.create({
  timerView: {
    flex: .2,
  },

  timerInput: {
    flex: 1,
    textAlign: 'center',
    borderColor: 'gray',
    fontFamily: 'Gravity-Light',
    borderWidth: 1
  }

});

module.exports = TimerInputCSS;
