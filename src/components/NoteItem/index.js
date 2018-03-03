import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-native';
import { Text, View } from 'react-native';

import MaterialIcon from '../MaterialIcon';
import { noteShape } from '../../models/note';
import { setCurrentNote } from '../../redux/actions';

class NoteItem extends React.Component {
  static mapDispatchToProps = dispatch => ({
    onEdit: (note, ownProps) => {
      dispatch(setCurrentNote(note));
      ownProps.history.push('/edit-note');
    },
  });

  render = () => (
    <View className="NoteItem-container">
      <View className="NoteItem-title-container">
        <Text className="NoteItem-title">{this.props.note.title}</Text>
        <MaterialIcon
          icon="&#xE254;"
          onClick={() => this.props.onEdit(this.props.note, this.props)}
          style={{
            cursor: 'pointer',
          }}
        />
      </View>
      <View className="NoteItem-note">{this.props.note.note}</View>
    </View>
  );
}

NoteItem.propTypes = {
  note: PropTypes.shape(noteShape).isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default withRouter(connect(null, NoteItem.mapDispatchToProps)(NoteItem));
