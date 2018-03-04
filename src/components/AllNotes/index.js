import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { ScrollView, View } from 'react-native';
import { withRouter } from 'react-router-native';

import Footer from '../Footer';
import NoteItem from '../NoteItem';
import Title from '../Title';
import Sync from '../Sync';

import { noteShape } from '../../models/note';

import * as styles from './AllNotes.style';

class AllNotes extends React.Component {
  static mapStateToProps = state => ({
    notes: [...state.notes.allNotes],
  });

  renderNotes = () => this.props.notes.reduce((accumulator, note) => {
    const notes = accumulator;
    notes.push((
      <NoteItem
        key={note.id}
        note={note}
      />
    ));
    return notes;
  }, []);

  render = () => (
    <View
      className="AllNotes-container"
      style={styles.container}
    >
      <View
        className="AllNotes-header"
        style={styles.header}
      >
        <Title value="Saved Notes" />
        {/* <Sync /> */}
      </View>
      <ScrollView
        className="AllNotes-main"
        style={styles.main}
      >
        {this.renderNotes()}
      </ScrollView>
      <Footer
        label="Create New Note"
        onClick={() => this.props.history.push('/new')}
        style={styles.footer}
      />
    </View>
  );
}

AllNotes.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape(noteShape)).isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(connect(AllNotes.mapStateToProps, null)(AllNotes));
