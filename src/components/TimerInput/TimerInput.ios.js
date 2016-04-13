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
  getInitialState: function(){
    return {
      text: '0'
    };
  },

  render: function() {
    return (
      <View style={styles.timerView} >
        <TextInput style={styles.timerInput}
          keyboardType='number-pad' 
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
      </View>
    );
  }
});

module.exports = TimerInput;
