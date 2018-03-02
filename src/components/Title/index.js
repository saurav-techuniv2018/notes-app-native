import { PropTypes } from 'prop-types';
import React from 'react';

import { Text } from 'react-native';
// import './Title.css';

class Title extends React.Component {
  constructor(props) {
    super(props);

    Title.propTypes = {
      value: PropTypes.string.isRequired,
    };
  }

  render() {
    return (
      <Text className="Title-heading">{this.props.value}</Text>
    );
  }
}

export default Title;
