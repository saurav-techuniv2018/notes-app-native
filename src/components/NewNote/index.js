import { PropTypes } from 'prop-types';
import React from 'react';
import { Button } from 'react-native';

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
      <article className="NewNote-container">
        <section className="NewNote-heading">
          <h2 className="NewNote-title">{this.props.title}</h2>
          <Button
            class="NewNote-button"
            title="en"
          />
        </section>
        <input
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
        <section className="NewNote-note-heading">
          <h3 className="NewNote-note-hint">{this.props.noteHint}</h3>
          <MaterialIcon icon={this.props.newNoteIcon} />
        </section>
        <textarea
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
        <section className="NewNote-action-section">
          <Button
            className="NewNote-button"
            label="Save"
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
        </section>
      </article>
    );
  }
}

export default NewNote;
