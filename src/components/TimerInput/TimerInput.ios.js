'use strict';
import React, {
  View,
  Component,
  Image,
  Text,
  TextInput
} from 'react-native';

var styles = require('./TimerInput.css.js');

var TimerInput = React.createClass( {
  updateTimer: function(time) {
    this.props.timerInputUpdate(parseInt(time));
  },

  render: function() {
    return (
      <View style={styles.timerView} >
        <TextInput style={styles.timerInput}
          keyboardType='number-pad' 
          onChangeText={this.updateTimer}
          value={this.props.time}
        />
      </View>
    );
  }
});
module.exports = TimerInput;
