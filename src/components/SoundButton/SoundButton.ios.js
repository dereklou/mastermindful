'use strict';
import React, {
  View,
  Component,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';

var styles = require('./SoundButton.css.js');

var SoundButton = React.createClass( {
  changeSound: function() {
    console.log("currentSound is: " + this.props.currentSound);
    console.log("sound is: " + this.props.sound);
    if ( this.props.currentSound == this.props.sound ) {
      console.log("turning off sound...");
      this.props.soundSelected("none");
    } else {
      console.log("turning ON sound...");
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
