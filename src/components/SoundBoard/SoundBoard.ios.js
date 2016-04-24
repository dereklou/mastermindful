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
          <SoundButton {...this.props.actions} currentSound={this.props.currentSound} sound="brownnoise.wav" activeSource={require('./white_noise_active.png')} inactiveSource={require('./white_noise_inactive.png')}/>
          <SoundButton {...this.props.actions} currentSound={this.props.currentSound} sound="rain.wav" activeSource={require('./rain_active.png')} inactiveSource={require('./rain_inactive.png')}/>
          <SoundButton {...this.props.actions} currentSound={this.props.currentSound} sound="ocean.wav" activeSource={require('./ocean_active.png')} inactiveSource={require('./ocean_inactive.png')}/>
        </View>
        <View style={styles.soundBoardRowView} alignItems = 'flex-start'>
          <SoundButton {...this.props.actions} currentSound={this.props.currentSound} sound="windleaves.wav" activeSource={require('./leaves_active.png')} inactiveSource={require('./leaves_inactive.png')}/>
          <SoundButton {...this.props.actions} currentSound={this.props.currentSound} sound="fire.wav" activeSource={require('./fire_active.png')} inactiveSource={require('./fire_inactive.png')}/>
        </View>
      </View>
    );
  }
});
module.exports = SoundBoard;
