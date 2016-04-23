'use strict';
import React, {
  StyleSheet,
} from 'react-native';

const CountdownCSS = StyleSheet.create({
  countdownView: {
    flex: .4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  countdownText: {
    flex: 1,
    textAlign: 'center',
    fontFamily: 'Gravity-UltraLight',
    fontSize: 90
  }

});

module.exports = CountdownCSS;
