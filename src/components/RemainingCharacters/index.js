import React from 'react';
import { PropTypes } from 'prop-types';
import { Text } from 'react-native';

const RemainingCharacters = props => (
  <Text
    className="RemainingCharacters"
    style={{
      flexGrow: 1,
      textAlign: 'right',
      alignSelf: 'center',
      fontSize: 16,
    }}
  >{`${props.count} ${props.itemLabel}`}
  </Text>
);

RemainingCharacters.propTypes = {
  count: PropTypes.number.isRequired,
  itemLabel: PropTypes.string.isRequired,
};

export default RemainingCharacters;
