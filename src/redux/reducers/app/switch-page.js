const switchPage = (currentState, payload) => {
  let newState = {
    ...currentState,
    currentPage: payload.currentPage,
  };

  if (payload.currentNote) {
    newState = {
      ...newState,
      currentNote: payload.currentNote,
    };
  }

  return newState;
};

export default switchPage;
