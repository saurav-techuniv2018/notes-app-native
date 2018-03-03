import React from 'react';
import { PropTypes } from 'prop-types';
import { Button, View } from 'react-native';

const Footer = props => (
  <View className="Footer-container" >
    <Button
      className="Footer-button"
      onPress={() => props.onClick()}
      title={props.label}
    />
  </View>
);

Footer.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Footer;
