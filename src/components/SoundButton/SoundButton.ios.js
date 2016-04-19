'use strict';
import React, {
  View,
  Component,
  Image,
  Text,
  TouchableWithoutFeedback,
  TextInput
} from 'react-native';

var styles = require('./SoundButton.css.js');

var SoundButton = React.createClass( {
  render: function() {
    return (
    <TouchableWithoutFeedback style={styles.soundButtonView}>

      <Image source={this.props.source} style={styles.soundButtonImage}/>

    </TouchableWithoutFeedback>
    );
  }
});
module.exports = SoundButton;
