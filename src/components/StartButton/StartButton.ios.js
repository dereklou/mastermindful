'use strict';
import React, {
  View,
  Component,
  Image,
  Text,
  TouchableWithoutFeedback,
  TextInput
} from 'react-native';

var styles = require('./StartButton.css.js');

var StartButton = React.createClass( {
  render: function() {
    var text = "Start!";
    if(this.props.counting) {
      text = "Stop!";
    }
    return (
    <TouchableWithoutFeedback onPress={()=>this.props.startButtonPressed(parseInt(this.props.currentTime)*60+'')} style={styles.startButtonView}>

      <View style={styles.startButtonView}>
        <Text style={styles.startButtonText}>{text}</Text>
      </View>
    </TouchableWithoutFeedback>
    );
  }
});
module.exports = StartButton;
