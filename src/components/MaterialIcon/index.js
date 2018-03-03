import React from 'react';
import { PropTypes } from 'prop-types';
import { Button, View } from 'react-native';

const MaterialIcon = props => (
  <View className="MaterialIcon-container">
    <Button
      onPress={() => props.onClick()}
      title={props.icon}
    />
    {/* <TouchableHighlight onPress={() => this.props.onClick()} /> */}
    {/* <span >
          <i
            className="material-icons"
            style={this.props.style}
          >{this.props.icon}
          </i>
        </span> */}
  </View>
);

MaterialIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

MaterialIcon.defaultProps = {
  onClick: () => { },
};

export default MaterialIcon;
