import { PropTypes } from 'prop-types';
import React from 'react';

import { Text } from 'react-native';

const Title = props => (
  <Text
    className="Title-heading"
  >
    {props.value}
  </Text>
);

Title.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Title;
