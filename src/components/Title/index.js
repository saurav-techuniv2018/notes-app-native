import { PropTypes } from 'prop-types';
import React from 'react';

import { Text } from 'react-native';

import * as styles from './Title.style';

const Title = props => (
  <Text
    className="Title-heading"
    style={styles.title}
  >
    {props.value}
  </Text>
);

Title.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Title;
