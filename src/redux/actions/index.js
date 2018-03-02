import { setCurrentNote } from './app';
import { addOrEditNote, putNotes } from './notes';

export { setCurrentNote, addOrEditNote, putNotes };

const actionGenerator = actionTypeName => ({
  type: actionTypeName,
});

export default actionGenerator;
