'use strict';

import React, { View, Text, Component, StyleSheet } from 'react-native';
 
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as mainActions from '../actions/mainActions.js';


var TimerInput = require('../components/TimerInput/TimerInput.ios.js');
var StartButton = require('../components/StartButton/StartButton.ios.js');
var Countdown = require('../components/Countdown/Countdown.ios.js');
var TestSoundButton = require('../components/TestSoundButton/TestSoundButton.ios.js');
var SoundButton = require('../components/SoundButton/SoundButton.ios.js')
var SoundBoard = require('../components/SoundBoard/SoundBoard.ios.js')
var Title = require('../components/Title/Title.ios.js')


export default class MastermindfulApp extends React.Component {
  constructor(props) {
    super(props);
  }
  render() { 
    const { state, actions } = this.props;
    console.log(state);
//          <Countdown counting={state.timer.counting} remainingTime={state.timer.remainingTime} {...actions}/>
//          <TimerInput time={state.timerInput.time} {...actions} />
    return (
        <View style={{flex: 1, backgroundColor: '#F8F6F7'}}>
          <Title/>
          <TimerInput time={state.timerInput.time} {...actions} />
          <SoundBoard />
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
