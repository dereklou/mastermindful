'use strict';
import React, {
  View,
  Component,
  Image,
  Text,
  TouchableWithoutFeedback,
  TextInput
} from 'react-native';

var styles = require('./TestSoundButton.css.js');

var TestSoundButton = React.createClass( {
  getInitialState: function() {
    return {
      active: false
    };
  },

  changeSound: function() {

    if ( this.state.active ) {
      this.setState({active: false});
      this.props.soundSelected("none");
    } else {
      this.setState({active: true});
      this.props.soundSelected("brownnoise.wav");
    }

  },

  render: function() {
    return (
    <TouchableWithoutFeedback onPress={this.changeSound} style={styles.startButtonView}>

      <View style={styles.startButtonView}>
        <Text style={styles.startButtonText}>AUDIO!</Text>
      </View>
    </TouchableWithoutFeedback>
    );
  }
});
module.exports = TestSoundButton;
