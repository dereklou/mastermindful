'use strict';
import React, {
  View,
  Component,
  Image,
  Text,
  TextInput,
  TouchableWithoutFeedback
} from 'react-native';

var styles = require('./TimerInput.css.js');

var TimerInput = React.createClass( {
  updateTimer: function(time) {
    console.log(time);
    if ( time.length >= 0 && time.length < 4) {
      try {
        var parsedTime =  parseInt(time) || 0;
        this.props.timerInputUpdate(parsedTime);
      } catch(e) {
        this.props.timerInputUpdate(0);
      }
    } 
  },

  render: function() {
    return (
      <View style={styles.timerView} >
          <Text style={styles.timerPrompt}>Minutes:</Text>
        <TextInput style={styles.timerInput}
          underlineColorAndroid={'#F8F6F7'}
          autoFocus={false}
          keyboardType='number-pad' 
          onChangeText={this.updateTimer}
          value={this.props.time+''}
        />
      </View>
    );
  }
});
module.exports = TimerInput;
