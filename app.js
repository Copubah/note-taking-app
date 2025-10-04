// app.js - note logic, works in browser and for Jest tests

// internal notes storage
const notes = [];

// safe HTML escape for rendering
function escapeHtml(str) {
  if (str == null) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function renderNotes() {
  const list = typeof document !== 'undefined' ? document.getElementById('notesList') : null;
  if (!list) return;
  list.innerHTML = '';
  notes.forEach((note, idx) => {
    const container = document.createElement('div');
    container.className = 'note';
    container.dataset.index = idx;
    container.innerHTML = `
      <strong>${escapeHtml(note.title)}</strong>
      <p>${escapeHtml(note.content)}</p>
      <button onclick="promptEdit(${idx})">Edit</button>
      <button onclick="deleteNote(${idx})">Delete</button>
    `;
    list.appendChild(container);
  });
}

// Unit-facing functions

function saveNote() {
  const titleEl = typeof document !== 'undefined' ? document.getElementById('noteTitle') : null;
  const contentEl = typeof document !== 'undefined' ? document.getElementById('noteContent') : null;
  const title = titleEl ? titleEl.value.trim() : '';
  const content = contentEl ? contentEl.value.trim() : '';

  if (!title) return 'Error: Title cannot be empty';

  notes.push({ title, content });
  if (titleEl) titleEl.value = '';
  if (contentEl) contentEl.value = '';
  renderNotes();
  return 'Note saved successfully';
}

function editNote(index, newTitle, newContent) {
  if (typeof index !== 'number' || index < 0 || index >= notes.length) return 'Error: Invalid index';
  if (!newTitle || !newTitle.trim()) return 'Error: Title cannot be empty';
  notes[index].title = String(newTitle).trim();
  notes[index].content = String(newContent || '').trim();
  renderNotes();
  return 'Note edited successfully';
}

function deleteNote(index) {
  if (typeof index !== 'number' || index < 0 || index >= notes.length) return 'Error: Invalid index';
  notes.splice(index, 1);
  renderNotes();
  return 'Note deleted successfully';
}

// helper used by the UI for prompts
function promptEdit(idx) {
  if (typeof window === 'undefined') return;
  const current = notes[idx] || { title: '', content: '' };
  const t = prompt('New title', current.title);
  if (t === null) return;
  const c = prompt('New content', current.content);
  editNote(idx, t, c);
}

// test helpers
function getNotes() {
  return notes.slice();
}

function resetNotes() {
  notes.length = 0;
  renderNotes();
  return 'Notes reset';
}

// export for Jest and attach to window for browser
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { saveNote, editNote, deleteNote, getNotes, resetNotes, renderNotes };
}
if (typeof window !== 'undefined') {
  window.saveNote = saveNote;
  window.editNote = editNote;
  window.deleteNote = deleteNote;
  window.getNotes = getNotes;
  window.resetNotes = resetNotes;
  window.renderNotes = renderNotes;
  window.promptEdit = promptEdit;
}
