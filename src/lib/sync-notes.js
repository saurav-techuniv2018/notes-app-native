// TODO Check result status

const getNotes = () => new Promise((resolve, reject) => {
  fetch('/api/notes')
    .then(response => response.text())
    .then(json => JSON.parse(json))
    .then((payload) => {
      resolve(payload.data.map(note => ({
        ...note,
        id: parseInt(note.id, 10),
      })));
    })
    .catch(() => {
      reject(new Error('Could not retrieve notes.'));
    });
});

const setNotes = notes => new Promise((resolve, reject) => {
  const requestPayload = JSON.stringify({
    notes,
  });

  fetch('/api/notes', {
    method: 'PUT',
    body: requestPayload,
  })
    .then(response => response.text())
    .then(json => JSON.parse(json))
    .then((payload) => {
      resolve(payload.data.map(note => ({
        ...note,
        id: parseInt(note.id, 10),
      })));
    })
    .catch(() => {
      reject(new Error('Could update notes in the database.'));
    });
});

export { getNotes, setNotes };
