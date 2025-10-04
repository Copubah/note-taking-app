/**
 * @jest-environment jsdom
 */
const { saveNote, getNotes, resetNotes } = require('../app.js');

beforeEach(() => {
  document.body.innerHTML = `
    <input id="noteTitle" value="">
    <textarea id="noteContent"></textarea>
    <div id="notesList"></div>
  `;
  resetNotes();
});

describe('Unit tests for saveNote', () => {
  test('should return error when title is empty', () => {
    document.getElementById('noteContent').value = 'Some content';
    const res = saveNote();
    expect(res).toBe('Error: Title cannot be empty');
    expect(getNotes().length).toBe(0);
  });

  test('should save successfully when title and content provided', () => {
    document.getElementById('noteTitle').value = 'My Title';
    document.getElementById('noteContent').value = 'My content';
    const res = saveNote();
    expect(res).toBe('Note saved successfully');
    expect(getNotes().length).toBe(1);
    expect(getNotes()[0].title).toBe('My Title');
  });
});
