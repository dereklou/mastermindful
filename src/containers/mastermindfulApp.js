'use strict';

import React, { View, Text, Component, StyleSheet } from 'react-native';
 
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as mainActions from '../actions/mainActions.js';


var TimerInput = require('../components/TimerInput/TimerInput.ios.js');
var StartButton = require('../components/StartButton/StartButton.ios.js');
var Countdown = require('../components/Countdown/Countdown.ios.js');

export default class MastermindfulApp extends React.Component {
  constructor(props) {
    super(props);
  }
  render() { 
    const { state, actions } = this.props;
    console.log(state);

    return (
        <View style={{flex: 1}}>
          <TimerInput time={state.timerInput.time} {...actions} />
          <Countdown counting={state.timer.counting} remainingTime={state.timer.remainingTime} {...actions}/>
          <StartButton currentTime={state.timerInput.time} counting={state.timer.counting} {...actions}/>
        </View>
        ); 
  }
}

export default connect(state => ({
  state: state
}),
    (dispatch) => ({
      actions: bindActionCreators(mainActions, dispatch)
    })
    )(MastermindfulApp);
