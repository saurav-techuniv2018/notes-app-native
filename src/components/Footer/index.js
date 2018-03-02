import { PropTypes } from 'prop-types';
import React from 'react';

import { Button } from 'react-native';
// import './Footer.css';

class Footer extends React.Component {
  constructor(props) {
    super(props);

    Footer.propTypes = {
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
    };
  }

  render = () => (
    <div className="Footer-container" >
      <Button
        className="Footer-button"
        onPress={() => this.props.onClick()}
        title={this.props.label} />
    </div>
  );
}
export default Footer;
