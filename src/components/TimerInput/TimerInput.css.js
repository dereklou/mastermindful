'use strict';
import React, {
  StyleSheet,
} from 'react-native';

const TimerInputCSS = StyleSheet.create({
  timerView: {
    flex: .4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'

  },

  timerPrompt:{
    flex: 1,
    textAlign: 'right',
    fontFamily: 'Gravity-Light',
    fontSize: 50,
  },

  timerInput: {
    flex: .7,
    textAlign: 'center',
    fontFamily: 'Gravity-Light',
    fontSize: 50,
  }

});

module.exports = TimerInputCSS;
