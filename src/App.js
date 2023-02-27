import React, { useState } from "react";

function App() {
  
  const [isHidden, toggleHidden] = useState(false); // Default state is false
  function toggleNoteVisibility() { // Function that is called if button is clicked
    toggleHidden(!isHidden);
  }
  
  return (
    <>
      <div id="title-bar">
        <button id="show-notes" onClick={toggleNoteVisibility}>&#9776;</button> {/* Calls toggleNoteVisibility if clicked */}
        <div id="title">
          <h1>Lotion</h1>
          <p id="description"><strong>Like Notion, but worse.</strong></p>
        </div>
      </div>

      <div id="content">
        <div id="note-list" className={isHidden ? "hidden" : ""}> {/* Ternary operator: will add hidden class if isHidden is true (otherwise nothing) */}
          <div id="note-list-header">
            <h3 id="note-list-header-text">Notes</h3>
            <button id="add-new">&#43;</button>
          </div>
          <div id="note-identifiers">
            <p id="no-note-yet">No Note Yet</p>
          </div>
        </div>
        <div id="note-content">
          Select a note, or create a new one.
        </div>
      </div>
    </>
  );
}

export default App;
