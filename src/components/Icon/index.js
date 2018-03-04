import React from 'react';
import { PropTypes } from 'prop-types';
import { View, Text, TouchableHighlight } from 'react-native';

const Icon = props => (
  <View className="Icon-container">
    <TouchableHighlight onPress={() => props.onClick()}>
      <Text>{props.icon}</Text>
    </TouchableHighlight>
  </View>
);

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Icon.defaultProps = {
  onClick: () => { },
};

export default Icon;
