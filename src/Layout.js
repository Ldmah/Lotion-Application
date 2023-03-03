import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from './Sidebar';
import NoteEditor from './NoteEditor';
import uuid from "react-uuid";

// Layout is what controls all your logic for the content

function Layout() {
    // This function allows the sidebar to appear and disappear depending on the button clicks
    const [isHidden, toggleHidden] = useState(false); // Default state is false
    function toggleNoteVisibility() { // Function that is called if button is clicked
        toggleHidden(!isHidden);
    }

    // This function keeps track of all the notes
    const [notes, allNotes] = useState([]);

    // This function creates a new note in the Sidebar
    const createNewNote = () => {
        console.log("dog")
        let note = {
            id: uuid(),
            title: "Untitled",
            date: Date.now(), // Need to update this later to match the date used in the NoteEditor
            body: "...",
        };
        allNotes([note, ...notes]);
    }


    return (
        <>
            <div id="title-bar">
                <button id="show-notes" onClick={toggleNoteVisibility}>&#9776;</button>
                <div id="title">
                    <h1>Lotion</h1>
                    <p id="description"><strong>Like Notion, but worse.</strong></p>
                </div>
            </div>

            <div id="content">
                <Sidebar visibility={isHidden} notesList={notes} createNewNote={createNewNote} />
                <Outlet  />
            </div>

        </>
    )
}

export default Layout;
