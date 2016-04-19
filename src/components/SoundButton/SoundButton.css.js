'use strict';
import React, {
  StyleSheet,
} from 'react-native';

const SoundButtonCSS = StyleSheet.create({
  soundButtonView: {
	flex: 1,
	flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },

  soundButtonImage: {
  	resizeMode: 'contain',
    height: 110,
    width: 110
  }

});

module.exports = SoundButtonCSS;
