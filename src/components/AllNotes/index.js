import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { withRouter } from 'react-router-native';

import Footer from '../Footer';
import NoteItem from '../NoteItem';
import Title from '../Title';
import Sync from '../Sync';

import { noteShape } from '../../models/note';

class AllNotes extends React.Component {
  static mapStateToProps = state => ({
    notes: [...state.notes.allNotes],
  });

  renderNotes = () => this.props.notes.reduce((accumulator, note) => {
    const notes = accumulator;
    notes.push((
      <View key={note.id}>
        <NoteItem
          note={note}
        />
      </View>
    ));
    return notes;
  }, []);

  render = () => (
    <View className="AllNotes-container">
      <View className="AllNotes-header">
        <Title value="Saved Notes" />
        <Sync />
      </View>
      <View className="AllNotes-main">
        {this.renderNotes()}
      </View>
      <Footer
        label="Create New Note"
        onClick={() => this.props.history.push('/new')}
      />
    </View>
  );
}

AllNotes.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape(noteShape)).isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(connect(AllNotes.mapStateToProps, null)(AllNotes));
