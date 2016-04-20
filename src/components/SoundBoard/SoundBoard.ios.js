'use strict';
import React, {
  View,
  Component,
} from 'react-native';

var SoundButton = require('../SoundButton/SoundButton.ios.js')

var styles = require('./SoundBoard.css.js');

var SoundBoard = React.createClass( {
  render: function() {
    return (
    <View style={styles.soundBoardView}>
      <View style={styles.soundBoardRowView} alignItems = 'flex-end'>
        <SoundButton source={require('../../img/white_noise_inactive.png')}/>
        <SoundButton source={require('../../img/rain_inactive.png')}/>
        <SoundButton source={require('../../img/ocean_inactive.png')}/>
      </View>
      <View style={styles.soundBoardRowView} alignItems = 'flex-start'>
        <SoundButton source={require('../../img/leaves_inactive.png')}/>
        <SoundButton source={require('../../img/fire_inactive.png')}/>
      </View>
    </View>
    );
  }
});
module.exports = SoundBoard;
