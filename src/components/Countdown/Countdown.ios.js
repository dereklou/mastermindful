'use strict';
import React, {
  View,
  Component,
  Image,
  Text,
  TextInput
} from 'react-native';

var styles = require('./Countdown.css.js');
import TimerMixin from 'react-timer-mixin';

var Countdown = React.createClass( {
  mixins: [TimerMixin],

  componentDidMount: function() {
    this.setInterval(
        this.decrement,
        1000
        );
  },

  toHHMMSS: function(time) {
    var sec_num = parseInt(time, 10); // don't forget the second param
    var minutes = Math.floor((sec_num ) / 60);
    var seconds = sec_num - (minutes * 60);

    if (seconds < 10) {seconds = "0"+seconds;}
    var formatted_time    = minutes+':'+seconds;
    return formatted_time;
  },

  decrement: function() {
    if (this.props.counting && this.props.remainingTime > 0 ) {
      this.props.timerDecrement(this.props.remainingTime);
    } else if ( this.props.counting ) {
      this.props.timerComplete();
    }

  },

  render: function() {
    return (
      <View style={styles.countdownView}>
        <Text style={styles.countdownText}>{this.toHHMMSS(this.props.remainingTime)}</Text>
      </View>
    );
  }
});

module.exports = Countdown;
