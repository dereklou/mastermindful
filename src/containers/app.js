'use strict';

import React, { Component, StyleSheet } from 'react-native';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import * as reducers from '../reducers';

import MastermindfulApp from './mastermindfulApp.js';

const reducer = combineReducers(reducers);
const store = compose(applyMiddleware(thunk))(createStore)(reducer);


export default class Application extends React.Component {
  render() {
    //TODO: Add provider
      return (
          <Provider store={store}>
            <MastermindfulApp />	
          </Provider>
          ); 
  }
}
