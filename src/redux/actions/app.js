const SET_CURRENT_NOTE = 'SET_CURRENT_NOTE';
const SYNC_DATA_STARTED = 'SYNC_DATA_STARTED';
const SYNC_DATA_SUCCEEDED = 'SYNC_DATA_SUCCEEDED';
const SYNC_DATA_FAILED = 'SYNC_DATA_FAILED';

export { SET_CURRENT_NOTE, SYNC_DATA_STARTED, SYNC_DATA_SUCCEEDED, SYNC_DATA_FAILED };

const setCurrentNote = currentNote => ({
  type: SET_CURRENT_NOTE,
  payload: { currentNote },
});

export { setCurrentNote };
