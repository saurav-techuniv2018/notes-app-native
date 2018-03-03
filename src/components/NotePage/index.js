import { PropTypes } from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-native';
import { View, Text } from 'react-native';

import { addOrEditNote, setCurrentNote } from '../../redux/actions';

import Title from '../Title';
import NewNote from '../NewNote';
import Footer from '../Footer';

import { noteShape } from '../../models/note';

class NotePage extends React.Component {
  static mapDispatchToProps = dispatch => ({
    onSave: ((note, ownProps) => {
      dispatch(addOrEditNote(note));
      dispatch(setCurrentNote(note));
      ownProps.history.push('/all');
    }),
  });

  render = () => (
    <View className="NotePage-container">
      <Text className="NotePage-header">
        <Title value="Start taking notes" />
      </Text>
      <View className="NotePage-main">
        <NewNote
          title="Note Title"
          noteTitlePlaceholder="Tasks for today"
          newNoteIcon="&#xE14F;"
          charactersLimit={120}
          note={this.props.note}
          noteHint="Please type your note below"
          onSave={note => this.props.onSave(note, this.props)}
        />
      </View>
      <Footer
        label="About Us"
        onClick={() => { }}
      />
    </View>
  );
}

NotePage.propTypes = {
  note: PropTypes.shape(noteShape).isRequired,
  onSave: PropTypes.func.isRequired,
};

export default withRouter(connect(null, NotePage.mapDispatchToProps)(NotePage));
