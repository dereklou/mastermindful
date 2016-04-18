'use strict';
import React, {
  StyleSheet,
} from 'react-native';

const CountdownCSS = StyleSheet.create({
  countdownView: {
    marginLeft: 100,
    marginRight: 100,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  },
  countdownText: {
    textAlign: 'center',
    fontFamily: 'Gravity-Light'
  }

});

module.exports = CountdownCSS;
