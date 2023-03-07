import React, { useState, useEffect } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import Sidebar from './Sidebar';
import uuid from "react-uuid";

// Layout is what controls all your logic for the content

function Layout() {
    
    

    // This function allows the sidebar to appear and disappear depending on the button clicks
    const [isHidden, toggleHidden] = useState(false); // Default state is false
    function toggleNoteVisibility() { // Function that is called if button is clicked
        toggleHidden(!isHidden);
    }
    // This function keeps track of the current note being edited and viewed
    const [activeNote, changeActiveNote] = useState(null); // This manages the current active note, originally set to null (for nothing)
    const currentNote = (newNote) => {
        changeActiveNote(newNote);
    }
    
    // This function keeps track of all the notes

    const [notes, allNotes] = useState(() => {
        const localStorageNotes = localStorage.getItem('notes');
        if (localStorageNotes)
        {
            const pastInfo = JSON.parse(localStorageNotes);
            changeActiveNote(pastInfo[0]);
            return pastInfo;
        }
        return [];
    });

    // Sets routing and URL
    const { noteId } = useParams();
    useEffect(() => {
        if (noteId != null)
        {
            let currentNote = notes[noteId - 1];
            changeActiveNote(currentNote);
        }

    }, [notes, noteId]);
    
    // This function stores all the notes in local storage
    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes]);
    

    // This function creates a new note in the Sidebar
    const navigate = useNavigate();
    const createNewNote = () => {
        let note = {
            id: uuid(),
            title: "Untitled",
            date: "", // Need to update this later to match the date used in the NoteEditor
            body: "",
        };
        currentNote(note);
        allNotes([note, ...notes]);
        navigate('/notes/edit/1');
    }

    // This function deletes the current note
    const deleteCurrentNote = (noteDelete) => {
        const answer = window.confirm("Are you sure?");
        if (answer) {
            let stateWithoutDeleted = notes.filter((note) => note.id !== noteDelete.id);
            allNotes(stateWithoutDeleted);
            changeActiveNote(stateWithoutDeleted[0]);
            navigate('/notes/1');
        }
    }

    

    // This function retrieves the information from the ReactQuill Editor, the date, and the title and puts it into the note object
    const saveNote = (content) => {
        const saveNoteInfo = notes.map((note) => {
            if (content.id == note.id)
            {
                return {
                    id: note.id,
                    title: content.title,
                    date: content.date,
                    body: content.body,
                }      
            }
            else {
                return note;
            }
        });
        allNotes(saveNoteInfo);

        const newActiveNote = saveNoteInfo.find((note) => note.id === content.id);
        changeActiveNote(newActiveNote);
        
        //localStorage.setItem('notes', JSON.stringify(saveNoteInfo));
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
                <Sidebar visibility={isHidden} notesList={notes} createNewNote={createNewNote} changeActiveNote={changeActiveNote} activeNote={activeNote} />
                <Outlet context={[notes, activeNote, deleteCurrentNote, saveNote]} />
            </div>

        </>
    )
}

export default Layout;


