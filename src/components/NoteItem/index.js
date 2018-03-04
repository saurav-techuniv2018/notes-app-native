import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-native';
import { Text, View } from 'react-native';

import Icon from '../Icon';
import { noteShape } from '../../models/note';
import { setCurrentNote } from '../../redux/actions';

import * as styles from './NoteItem.style';

class NoteItem extends React.Component {
  static mapDispatchToProps = dispatch => ({
    onEdit: (note, ownProps) => {
      dispatch(setCurrentNote(note));
      ownProps.history.push('/edit-note');
    },
  });

  render = () => (
    <View
      className="NoteItem-container"
      style={styles.container}
    >
      <View
        className="NoteItem-title-container"
        style={styles.titleContainer}
      >
        <Text
          className="NoteItem-title"
          style={styles.title}
        >{this.props.note.title}
        </Text>
        <Icon
          icon="&#xE254;"
          onClick={() => this.props.onEdit(this.props.note, this.props)}
        />
      </View>
      <Text
        className="NoteItem-note"
        style={styles.note}
      >{this.props.note.note}
      </Text>
    </View>
  );
}

NoteItem.propTypes = {
  note: PropTypes.shape(noteShape).isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default withRouter(connect(null, NoteItem.mapDispatchToProps)(NoteItem));
