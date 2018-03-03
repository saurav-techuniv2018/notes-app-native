/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { NativeRouter } from 'react-router-native';
import { Provider } from 'react-redux';

import initStore from './src/redux/stores';
import NotesApp from './src/components/App';

const store = initStore();

const App = () => (
  <NativeRouter>
    <Provider store={store}>
      <NotesApp />
    </Provider>
  </NativeRouter>
);

export default App;
