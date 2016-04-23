'use strict';

import React, { View, TouchableWithoutFeedback, Text, Component, StyleSheet } from 'react-native';
 
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as mainActions from '../actions/mainActions.js';


var dismissKeyboard = require('dismissKeyboard');
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

  dismiss() {
    dismissKeyboard();
  }

  render() { 
    const { state, actions } = this.props;
    console.log(state);
    var timerJSX = <TimerInput time={state.timerInput.time} {...actions} />;
    if ( state.timer.counting ) {
       timerJSX =  <Countdown counting={state.timer.counting} remainingTime={state.timer.remainingTime} {...actions}/>;
    }

//          <TimerInput time={state.timerInput.time} {...actions} />
    return (
        <TouchableWithoutFeedback onPress={this.dismiss} style={{flex: 1, backgroundColor: '#F8F6F7'}}>
        <View style={{flex: 1, backgroundColor: '#F8F6F7'}}>
          <Title/>
          {timerJSX}
          <SoundBoard currentSound={state.sound.currentSound} actions={actions}/>
          <StartButton currentTime={state.timerInput.time} counting={state.timer.counting} {...actions}/>
        </View>
        </TouchableWithoutFeedback>
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
