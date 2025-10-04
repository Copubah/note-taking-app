/**
 * @jest-environment jsdom
 */
const { saveNote, editNote, deleteNote, getNotes, resetNotes } = require('../app.js');

beforeEach(() => {
  document.body.innerHTML = `
    <input id="noteTitle" value="">
    <textarea id="noteContent"></textarea>
    <div id="notesList"></div>
  `;
  resetNotes();
});

test('system: create -> edit -> delete flow', () => {
  // create
  document.getElementById('noteTitle').value = 'System Note';
  document.getElementById('noteContent').value = 'System content';
  const r1 = saveNote();
  expect(r1).toBe('Note saved successfully');
  expect(getNotes().length).toBe(1);
  expect(getNotes()[0].title).toBe('System Note');

  // edit
  const r2 = editNote(0, 'Edited Note', 'Updated content');
  expect(r2).toBe('Note edited successfully');
  expect(getNotes()[0].title).toBe('Edited Note');

  // delete
  const r3 = deleteNote(0);
  expect(r3).toBe('Note deleted successfully');
  expect(getNotes().length).toBe(0);
});
