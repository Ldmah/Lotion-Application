import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from './Sidebar';
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
        let note = {
            id: uuid(),
            title: "Untitled",
            date: Date.now(), // Need to update this later to match the date used in the NoteEditor
            body: "",
        };
        currentNote(note.id);
        allNotes([note, ...notes]);
        
    }

    // This function deletes the current note (THIS FUNCTION HAS NOT BEEN TESTED YET)
    const deleteCurrentNote = (idDelete) => {
        for (let i = 0; i < notes.length; i++)
        {
            if (notes[i].id == idDelete)
            {
                notes.splice(i, 1);
            }
        }
    }

    // This function keeps track of the current note being edited and viewed
    const [activeNote, setActiveNote] = useState(null);
    const currentNote = (newId) => {
        setActiveNote(newId);
    }

    // This useEffect hook is used to give us the value straight away after an update to activeNote
    // useEffect(() => {
    //     console.log(activeNote); // In the state hook, it will not update until the next render
    // }, [activeNote]);


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
                <Outlet context={[notes, activeNote]} />
            </div>

        </>
    )
}

export default Layout;
