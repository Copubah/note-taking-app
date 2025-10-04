/**
 * @jest-environment jsdom
 */
const { saveNote, getNotes, resetNotes } = require('../app.js');

beforeEach(() => {
  document.body.innerHTML = `
    <input id="noteTitle" value="Integration Title">
    <textarea id="noteContent">Integration content</textarea>
    <div id="notesList"></div>
  `;
  resetNotes();
});

test('integration: saving a note shows it in the DOM', () => {
  const res = saveNote();
  expect(res).toBe('Note saved successfully');

  const notesListHtml = document.getElementById('notesList').innerHTML;
  expect(notesListHtml).toContain('Integration Title');
  expect(getNotes().length).toBe(1);
});
