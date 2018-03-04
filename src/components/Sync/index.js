import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Text, View } from 'react-native';

import Icon from '../Icon';

import { putNotes } from '../../redux/actions';
import { getNotes, setNotes } from '../../lib/sync-notes';

import { noteShape } from '../../models/note';

class Sync extends React.Component {
  static mapStateToProps = state => ({
    notes: [...state.notes.allNotes],
  });

  static mapDispatchToProps = dispatch => ({
    putNotes: notes => dispatch(putNotes(notes)),
  });

  syncNotes() {
    if (this.props.notes.length === 0) {
      getNotes()
        .then((notes) => {
          this.props.putNotes(notes);
        })
        .catch(() => {
        });
    } else {
      setNotes(this.props.notes)
        .then((notes) => {
          this.props.putNotes(notes);
        })
        .catch(() => {
        });
    }
  }

  render = () => (
    <View className="Sync">
      <Text className="Sync-title">Sync Notes</Text>
      <Icon
        icon="&#xE627;"
        onClick={() => this.syncNotes()}
        style={{
          cursor: 'pointer',
        }}
      />
    </View>
  );
}

Sync.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape(noteShape)).isRequired,
  putNotes: PropTypes.func.isRequired,
};

export default connect(Sync.mapStateToProps, Sync.mapDispatchToProps)(Sync);
