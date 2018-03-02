import { Note } from '../../../models/note';

const addOrEditNote = (state, newNote) => {
  if (!newNote.id) {
    return {
      ...state,
      allNotes: [...state.allNotes,
        new Note(newNote.title, newNote.note),
      ],
    };
  }

  return {
    ...state,
    allNotes: state.allNotes.map((note) => {
      if (note.id !== newNote.id) return note;

      return {
        ...note,
        title: newNote.title,
        note: newNote.note,
      };
    }),
  };
};

export default addOrEditNote;
