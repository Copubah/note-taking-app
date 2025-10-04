# Test Report — Note-Taking App
## 1. Unit Test
- Function tested: `saveNote()`

## What I tested for:
- If the app shows an error when title or content is empty
- If valid notes are saved correctly to localStorage

## What I observed:
- When either title or content is missing, an error message appears.
- When both fields are filled, the note is saved successfully and appears in the list below.

## Bugs found:
- None in the saveNote() function after testing.
- Initially, it allowed empty notes, but that was fixed.



## 2. Integration & System Tests
## Steps tested (in the browser):
1. Typed a note title and content → clicked “Save Note”
2. Checked that the new note (“test: testy”) appeared under Notes
3. Clicked -Edit → changed the note → clicked “Save Note” again
4. Clicked -Delete → note disappeared from the list

## What worked well:
- The app saved and displayed notes immediately.
- Edit and delete buttons functioned properly.
- Data persisted correctly in localStorage.

## What didn’t work:
- After editing or deleting, input fields were not cleared automatically.
- Notes didn’t re-render instantly unless the page refreshed in some cases.



## 3. Reflection
## Hard parts:
- Understanding how to connect the HTML buttons with the JavaScript logic and how to simulate these behaviors in Jest.

## How I figured out what to test:
- I followed the actual user flow — typing, saving, editing, and deleting — then wrote tests that matched those interactions.

## What I learned:
- How to verify that JavaScript and the DOM work together.
- The difference between testing a single function (unit), connected features (integration), and the whole user experience (system).
