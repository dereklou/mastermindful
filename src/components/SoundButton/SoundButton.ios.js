'use strict';
import React, {
  View,
  Component,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';

var styles = require('./SoundButton.css.js');
var dismissKeyboard = require('dismissKeyboard');

var SoundButton = React.createClass( {
  changeSound: function() {
    dismissKeyboard();
    if ( this.props.currentSound == this.props.sound ) {
      this.props.soundSelected("none");
    } else {
      this.props.soundSelected(this.props.sound);
    }
  },

  render: function() {
    var image = this.props.inactiveSource;
    if ( this.props.currentSound == this.props.sound ) {
      image = this.props.activeSource;
    }
    return (
    <TouchableWithoutFeedback onPress={this.changeSound} style={styles.soundButtonView}>

      <Image source={image} style={styles.soundButtonImage}/>

    </TouchableWithoutFeedback>
    );
  }
});
module.exports = SoundButton;
