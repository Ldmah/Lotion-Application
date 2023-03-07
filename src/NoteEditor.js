import ReactQuill from 'react-quill';
import React, { useState, useRef, useEffect } from "react";
import 'react-quill/dist/quill.snow.css';
import { useOutletContext, useNavigate } from "react-router-dom";



function NoteEditor() {
    // This is taking the outlet information
    const [notesList, activeNote, deleteCurrentNote, saveNote] = useOutletContext();
    const navigate = useNavigate();
    // Ensures that all values are two digit strings even if only one digit in lenght (values 1-9)
    const twoDigit = (value) => {
        if (value.length < 2)
        {
            return '0' + value;
        }
        else {
            return value;
        }
    }
    // Converting to a 24 hours clock for formatting
    const fullClock = (value, time) => {
        if (time == "PM")
        {
            let wrongTime = parseInt(value);
            wrongTime = wrongTime + 12;
            return wrongTime.toString();
        }
        else {
            return value;
        }
    }

    // Retrieving date and formatting for the input type to output the correct value in the header
    const formatDate = (when) => {
        let formatted = new Date(when).toLocaleString();
        if (formatted === "Invalid Date") {
            return "";
        }
        let tokens = formatted.split("/");
        let year = tokens[2].substring(0, 4)
        let month = twoDigit(tokens[0]);
        let day = twoDigit(tokens[1]);
        let time = tokens[2].substring(6);
        let tokens2 = time.split(":");
        let hoursUnknown = twoDigit(tokens2[0]);
        let amPm = tokens[2].substring(tokens[2].length - 2);
        let hours = fullClock(hoursUnknown, amPm);
        let minutes = twoDigit(tokens2[1])
        let seconds = twoDigit(tokens2[2].substring(0, 2));
        formatted = year + "-" + month + "-" + day + "T" + hours + ":" + minutes + ":" + seconds;
        return formatted;
    }
    
    // Setting up string formatting for the return sidebar value
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
    };
    
    const formatDateSidebar = (when) => {
        const formatted = new Date(when).toLocaleString("en-US", options);
        if (formatted === "Invalid Date") {
            return "";
        }
        return formatted;
    };

    // Setting up a state to keep track of the formatted date shown in the header title
    const [date, setDate] = useState(formatDate(new Date()));

    // Setting up states to contain the contents of each edited note
    const [currentTitle, setTitle] = useState("Untitled");
    
    // Getting rid of blank paragraphs:
    const removeWhitespace = (text) => {
        while (text.indexOf('<p><br></p>') !== -1) {
            text = text.replace('<p><br></p>', '');
          }
          return text;
    }

    // Saving current data in the Quill Editor and saving it to view; redirecting to the corresponding view
    const quillRef = useRef(null);
    const save = () => {
        const html = quillRef.current.getEditor().container.firstChild.innerHTML;
        
        let content = {
            id: activeNote.id,
            body: removeWhitespace(html),
            title: currentTitle,
            date: formatDateSidebar(date),
        }
        saveNote(content);
        
    };
    const navToEdit = () => {
        const activeNoteIndex = notesList.findIndex(note => note.id === activeNote.id) + 1;
        navigate(`/notes/${activeNoteIndex}`);
    }
    const saveAndNav = () => {
        save();
        navToEdit();
    }

    // This function assists us in navigating from note to note in the edit section
    useEffect(() => {
        if (activeNote) {
            setTitle(activeNote.title);
            setDate(formatDate(new Date()));
            const currentEditor = quillRef.current.getEditor();
            currentEditor.setContents(currentEditor.clipboard.convert(activeNote.body));
        }
    }, [activeNote]);

    return (
        <div className="note-content">
            <div className="note-title">
                <div id="information">
                    <input type="text" id="note-edit-title" value={currentTitle} onChange={(newValue) => setTitle(newValue.target.value)}></input>
                    <div className="date">
                        <input id="datetime" type="datetime-local" value={date} onChange={(newValue) => setDate(newValue.target.value)}/>
                    </div>
                </div>

                <div id="buttons">
                    <button id="save" onClick={(saveAndNav)} >Save</button>
                    <button id="delete" onClick={() => {
                        deleteCurrentNote(activeNote);
                    }}>Delete</button>
                </div>

                
            </div>
            <div id="editor">
                <ReactQuill ref={quillRef} />
            </div>
        </div>
        
    )
}

export default NoteEditor;

