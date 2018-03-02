import { PropTypes } from 'prop-types';
import React from 'react';

// import './RemainingCharacters.css';

class RemainingCharacters extends React.Component {
  constructor(props) {
    super(props);

    RemainingCharacters.propTypes = {
      count: PropTypes.number.isRequired,
      itemLabel: PropTypes.string.isRequired,
    };
  }

  render() {
    return (
      <p className="RemainingCharacters">{`${this.props.count} ${this.props.itemLabel}`}</p>
    );
  }
}

export default RemainingCharacters;
