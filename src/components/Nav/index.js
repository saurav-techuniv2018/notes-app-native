import React from 'react';
import { Button, Text, View } from 'react-native';
import { withRouter } from 'react-router-native';

import * as styles from './Nav.style';

const Nav = props => (
  <View style={styles.container}>
    <Text style={styles.header}>Notes App</Text>
    <Button
      title="Create new note"
      onPress={() => props.history.push('/new-note')}
    // style={styles.link}
    />
    <Button
      title="All notes"
      onPress={() => props.history.push('/all')}
    />

  </View>
);

export default withRouter(Nav);
