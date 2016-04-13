'use strict';

import React, { View, Text, Component, StyleSheet } from 'react-native';
//import { createStore, applyMiddleware, combineReducers } from 'redux';
//import { Provider } from 'react-redux';
//import {bindActionCreators} from 'redux';

//import {Scene, Router, Schema, Actions} from 'react-native-router-flux'
//import { connect } from 'react-redux';

//const scenes = Actions.create(
//    <Scene key="root">
//      <Scene key="RankScreen"
//      initial={true} hideNavBar={true}
//      component={RankScreen} title="DogShow"/>
//    </Scene>
//    );

export default class MastermindfulApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state, actions } = this.props;

    return (
        <View>
          <Text>Hello</Text>
        </View>
//        <Router scenes={scenes}
//          {...actions} />
        ); 
  }
}

//export default connect(state => ({
//  state: state
//}),
//    (dispatch) => ({
//      actions: bindActionCreators(rankScreenActions, dispatch)
//    })
//    )(DogShowApp);
