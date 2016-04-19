'use strict';
import React, {
  StyleSheet,
} from 'react-native';

const CountdownCSS = StyleSheet.create({
  countdownView: {
    flex: .2,
    borderColor: 'gray',
    borderWidth: 1
  },
  countdownText: {
    flex: 1,
    textAlign: 'center',
    fontFamily: 'Gravity-Light'
  }

});

module.exports = CountdownCSS;
