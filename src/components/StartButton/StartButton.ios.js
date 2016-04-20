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
    var text = require('../../img/start_button.png')
    if(this.props.counting) {
      text = require('../../img/end_button.png')
    }
    return (

    <View style={styles.startButtonView}> 
      <TouchableWithoutFeedback onPress={()=>this.props.startButtonPressed(parseInt(this.props.currentTime)*60+'')} style={styles.startButton}>
        <Image source={text} style = {styles.startButtonImage} />
      </TouchableWithoutFeedback>
    </View>
    );
  }
});
module.exports = StartButton;
