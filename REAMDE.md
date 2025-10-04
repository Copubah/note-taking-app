## Note-Taking App — Functional Testing Lab
## Overview
- This is a simple Note-Taking App built for the Functional Testing Lab (Week 2 Assignment).
- It allows users to create, view, edit, and delete notes directly in the browser.

## The main goal of this project is to practice Unit, Integration, and System Testing using Jest.
## Features

- Add new notes with a title and content
- View saved notes
- Edit existing notes
- Delete notes
- Validate empty inputs before saving

## Testing
- Three types of tests were written using Jest:
- Unit Testing
- Tested the saveNote() function
- Verified that notes cannot be saved with empty fields

## Integration Testing
- Checked if typing a note and clicking "Save Note" adds it correctly to the list

## System Testing
- Tested the full flow: write → save → edit → delete

## Bug Reports
- At least three GitHub Issues were created to document functional problems found during testing.
- Each issue is labeled with functional for easy tracking.
- You can view them under the Issues tab in this repository.

## How to Run Locally
- Clone the repository
- git clone https://github.com/Copubah/note-taking-app.git
- cd note-taking-app


## Install dependencies
- npm install


## Run the app
- Open index.html in your browser.
- Run tests
- npm test

## Tools Used
- HTML, CSS, JavaScript — for the app
- Jest — for testing
- GitHub Issues — for bug tracking