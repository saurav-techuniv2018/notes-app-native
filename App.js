/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { NativeRouter } from 'react-router-native';
import { Provider } from 'react-redux';

import initStore from './src/redux/stores';
import NotesApp from './src/components/App';

const store = initStore();

export default class App extends Component {
  render = () => (
    <NativeRouter>
      <Provider store={store}>
        <NotesApp />
      </Provider>
    </NativeRouter>
  )
}
