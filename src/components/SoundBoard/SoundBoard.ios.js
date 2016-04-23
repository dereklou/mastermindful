'use strict';
import React, {
  View,
  TouchableWithoutFeedback,
  Component,
} from 'react-native';

var dismissKeyboard = require('dismissKeyboard');
var SoundButton = require('../SoundButton/SoundButton.ios.js')

var styles = require('./SoundBoard.css.js');

var SoundBoard = React.createClass( {
  render: function() {
    return (
      <View style={styles.soundBoardView}>
        <View style={styles.soundBoardRowView} alignItems = 'flex-end'>
          <SoundButton {...this.props.actions} currentSound={this.props.currentSound} sound="brownnoise.wav" activeSource={require('../../img/white_noise_active.png')} inactiveSource={require('../../img/white_noise_inactive.png')}/>
          <SoundButton {...this.props.actions} currentSound={this.props.currentSound} sound="rain.wav" activeSource={require('../../img/rain_active.png')} inactiveSource={require('../../img/rain_inactive.png')}/>
          <SoundButton {...this.props.actions} currentSound={this.props.currentSound} sound="ocean.wav" activeSource={require('../../img/ocean_active.png')} inactiveSource={require('../../img/ocean_inactive.png')}/>
        </View>
        <View style={styles.soundBoardRowView} alignItems = 'flex-start'>
          <SoundButton {...this.props.actions} currentSound={this.props.currentSound} sound="windleaves.wav" activeSource={require('../../img/leaves_active.png')} inactiveSource={require('../../img/leaves_inactive.png')}/>
          <SoundButton {...this.props.actions} currentSound={this.props.currentSound} sound="fire.wav" activeSource={require('../../img/fire_active.png')} inactiveSource={require('../../img/fire_inactive.png')}/>
        </View>
      </View>
    );
  }
});
module.exports = SoundBoard;
