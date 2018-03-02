import { PropTypes } from 'prop-types';

const noteShape = {
  id: PropTypes.number,
  note: PropTypes.string,
  title: PropTypes.string,
};

class Note {
  constructor(title, note) {
    this.id = Date.now();
    this.title = title;
    this.note = note;
  }
}

export { Note, noteShape };

export default Note;
