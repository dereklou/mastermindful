'use strict';
import React, {
  StyleSheet,
} from 'react-native';

const StartButtonCSS = StyleSheet.create({
 startButtonView: {
	flex: .3,
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'flex-end'
  },
  startButtonImage: {
  	resizeMode: 'contain',
  	width: 200
  },
  startButton: {
    flex: 1
  }

});

module.exports = StartButtonCSS;
