import { PropTypes } from 'prop-types';
import React from 'react';
import { Button, View, Text, TextInput } from 'react-native';

import MaterialIcon from '../MaterialIcon';
import RemainingCharacters from '../RemainingCharacters';

import { noteShape } from '../../models/note';

// import './NewNote.css';

class NewNote extends React.Component {
  constructor(props) {
    super(props);

    NewNote.propTypes = {
      title: PropTypes.string.isRequired,
      noteTitlePlaceholder: PropTypes.string.isRequired,
      newNoteIcon: PropTypes.string.isRequired,
      charactersLimit: PropTypes.number.isRequired,
      noteHint: PropTypes.string.isRequired,
      onSave: PropTypes.func.isRequired,
      note: PropTypes.shape(noteShape).isRequired,
    };

    this.state = {
      limitReaching: false,
      charactersLimit: this.props.charactersLimit,
      note: this.props.note.note,
      noteTitle: this.props.note.title,
    };
  }

  render() {
    return (
      <View className="NewNote-container">
        <View className="NewNote-heading">
          <Text className="NewNote-title">{this.props.title}</Text>
          <Button
            class="NewNote-button"
            title="en"
          />
        </View>
        <TextInput
          type="text"
          className="NewNote-title-input"
          placeholder={this.props.noteTitlePlaceholder}
          value={this.state.noteTitle}
          onChange={(e) => {
            const newTitle = e.target.value;
            this.setState(prevState => ({
              ...prevState,
              noteTitle: newTitle,
            }));
          }}
        />
        <View className="NewNote-note-heading">
          <Text className="NewNote-note-hint">{this.props.noteHint}</Text>
          <MaterialIcon icon={this.props.newNoteIcon} />
        </View>
        <TextInput
          value={this.state.note}
          maxLength={this.state.charactersLimit}
          className={`NewNote-notes ${this.state.limitReaching ? 'NewNote-textarea-warning' : ''}`}
          onChange={(e) => {
            const newNote = e.target.value;

            this.setState(prevState => ({
              ...prevState,
              note: newNote,
              limitReaching: newNote.length >= this.state.charactersLimit,
            }));
          }}
        />
        <View className="NewNote-action-section">
          <Button
            className="NewNote-button"
            title="Save"
            onClick={() => {
              if (
                this.state.note === '' ||
                this.state.noteTitle === '') {
                return;
              }

              this.props.onSave({
                id: this.props.note.id,
                title: this.state.noteTitle,
                note: this.state.note,
              });
              this.setState({
                limitReaching: false,
              });
            }}
          />
          <RemainingCharacters
            count={this.state.charactersLimit - this.state.note.length}
            itemLabel="characters"
          />
        </View>
      </View>
    );
  }
}

export default NewNote;
