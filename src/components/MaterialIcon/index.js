import React from 'react';
import { PropTypes } from 'prop-types';
import { TouchableHighlight, View } from 'react-native';

// import './MaterialIcon.css';

class MaterialIcon extends React.Component {
  constructor(props) {
    super(props);

    MaterialIcon.propTypes = {
      icon: PropTypes.string.isRequired,
      onClick: PropTypes.func,
      style: PropTypes.object,
    };

    MaterialIcon.defaultProps = {
      onClick: () => { },
      style: {},
    };
  }

  render() {
    return (
      <View className="MaterialIcon-container">
        <TouchableHighlight onPress={() => this.props.onClick()} />
        {/* <span >
          <i
            className="material-icons"
            style={this.props.style}
          >{this.props.icon}
          </i>
        </span> */}
      </View>
    );
  }
}

export default MaterialIcon;
