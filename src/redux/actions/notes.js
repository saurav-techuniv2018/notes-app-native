const ADD_OR_EDIT_NOTE = 'ADD_OR_EDIT_NOTE';
const PUT_NOTES = 'PUT_NOTES';

export { ADD_OR_EDIT_NOTE, PUT_NOTES };

const addOrEditNote = note => ({
  type: ADD_OR_EDIT_NOTE,
  payload: note,
});

const putNotes = notes => ({
  type: PUT_NOTES,
  payload: notes,
});

export { addOrEditNote, putNotes };
