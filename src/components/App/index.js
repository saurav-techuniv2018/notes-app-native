import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-native';

import NotePage from '../NotePage';
import AllNotes from '../AllNotes';
import Nav from '../Nav';

import { getNotes, setNotes } from '../../lib/sync-notes';
import actionGenerator, { setCurrentNote, putNotes } from '../../redux/actions';
import { SYNC_DATA_STARTED, SYNC_DATA_SUCCEEDED, SYNC_DATA_FAILED } from '../../redux/actions/app';

// import './App.css';
import { noteShape } from '../../models/note';

class App extends React.Component {
  static mapStateToProps = state => ({
    currentNote: {
      ...state.app.currentNote,
    },
    notes: [...state.notes.allNotes],
  });

  static mapDispatchToProps = dispatch => ({
    setCurrentNote: (note) => { dispatch(setCurrentNote(note)); },
    fetchNotesStarted: () => { dispatch(actionGenerator(SYNC_DATA_STARTED)); },
    fetchNotesSucceeded: () => { dispatch(actionGenerator(SYNC_DATA_SUCCEEDED)); },
    fetchNotesFailed: () => { dispatch(actionGenerator(SYNC_DATA_FAILED)); },
    putNotes: notes => dispatch(putNotes(notes)),
  });

  componentDidMount() {
    this.syncNotes();
  }

  syncNotes() {
    this.props.fetchNotesStarted();

    if (this.props.notes.length === 0) {
      getNotes()
        .then((notes) => {
          this.props.putNotes(notes);
          this.props.fetchNotesSucceeded();
        })
        .catch(() => {
          this.props.fetchNotesFailed();
        });
    } else {
      setNotes(this.props.notes)
        .then((notes) => {
          this.props.putNotes(notes);
          this.props.fetchNotesSucceeded();
        })
        .catch(() => {
          this.props.fetchNotesFailed();
        });
    }
  }

  render = () => (
    <StackRouter>
      <Route exact path="/" component={Nav} />
      <Route
        path="/new"
        render={routeProps => (
          <NotePage
            {...routeProps}
            note={{
              title: '',
              note: '',
            }}
          />
        )}
      />
      <Route
        path="/edit-note"
        render={routeProps => (
          <NotePage
            {...routeProps}
            note={this.props.currentNote}
          />
        )}
      />
      <Route path="/all" component={AllNotes} />
    </StackRoute>
  );
}

App.propTypes = {
  currentNote: PropTypes.shape({
    note: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  fetchNotesStarted: PropTypes.func.isRequired,
  fetchNotesSucceeded: PropTypes.func.isRequired,
  fetchNotesFailed: PropTypes.func.isRequired,
  putNotes: PropTypes.func.isRequired,
  notes: PropTypes.arrayOf(PropTypes.shape(noteShape)).isRequired,
};

export default withRouter(connect(App.mapStateToProps, App.mapDispatchToProps)(App));
