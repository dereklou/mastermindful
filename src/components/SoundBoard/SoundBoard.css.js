'use strict';
import React, {
  StyleSheet,
} from 'react-native';


const SoundBoardCSS = StyleSheet.create({
  soundBoardView: {
    borderColor: 'gray',
    borderWidth: 1,
    flex: 1,

  },
  soundBoardRowView:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  }


});

module.exports = SoundBoardCSS;