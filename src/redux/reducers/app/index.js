import { SET_CURRENT_NOTE, SYNC_DATA_STARTED, SYNC_DATA_SUCCEEDED } from '../../actions/app';
import switchPage from './switch-page';

const defaultState = {
  isBusy: false,
  currentPage: 1,
  currentNote: {
    title: '',
    note: '',
  },
};

const app = (currentState = defaultState, action) => {
  switch (action.type) {
    case SET_CURRENT_NOTE:
      return switchPage(currentState, action.payload);

    case SYNC_DATA_STARTED:
      return {
        ...currentState,
        isBusy: true,
      };

    case SYNC_DATA_SUCCEEDED:
      return {
        ...currentState,
        isBusy: false,
      };

    default:
      return currentState;
  }
};

export default app;
