import React from 'react';
import { PropTypes } from 'prop-types';
import { View, Text, TouchableHighlight } from 'react-native';

const Icon = props => (
  <View
    className="Icon-container"
    style={props.style}
  >
    <TouchableHighlight onPress={() => props.onClick()}>
      <Text>{props.icon}</Text>
    </TouchableHighlight>
  </View>
);

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  style: PropTypes.object,
};

Icon.defaultProps = {
  onClick: () => { },
  style: {},
};

export default Icon;
