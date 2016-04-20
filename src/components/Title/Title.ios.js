'use strict';
import React, {
  View,
  Component,
  Text
} from 'react-native';

var styles = require('./Title.css.js');

var Title = React.createClass( {
  render: function() {
    return (
    <View style={styles.titleView}>
      <Text style={styles.titleText}>Mastermindful</Text>
    </View>
    );
  }
});
module.exports = Title;
