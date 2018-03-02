import { PropTypes } from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

import Footer from '../Footer';
import NoteItem from '../NoteItem';
import Title from '../Title';
import Sync from '../Sync';

import { noteShape } from '../../models/note';

// import './AllNotes.css';

class AllNotes extends React.Component {
  static mapStateToProps = state => ({
    notes: [...state.notes.allNotes],
  });

  static mapDispatchToProps = () => ({
    switchPage: (ownProps) => { ownProps.history.push('/new'); },
  });

  constructor(props) {
    super(props);

    AllNotes.propTypes = {
      notes: PropTypes.arrayOf(PropTypes.shape(noteShape)).isRequired,
      switchPage: PropTypes.func.isRequired,
    };
  }

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
        onClick={() => this.props.switchPage(this.props)}
      />
    </View>
  );
}

export default connect(AllNotes.mapStateToProps, AllNotes.mapDispatchToProps)(AllNotes);
