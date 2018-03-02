import { PropTypes } from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router-native';
import { Text, View } from 'react-native';

import { Button } from 'react-native';

import * as styles from './Nav.style';

const Nav = props => (
  <View style={styles.container}>
    {/* <Text style={styles.header}>Notes App</Text>
    <Button
      title="Create new note"
      onPress={() => props.history.push('/new')}
      // style={styles.link}
    />
*/}
    <Button
      title="All notes"
      onPress={() => props.router.push('/all')}
    />

  </View>
);

Nav.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(Nav);
