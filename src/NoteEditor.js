import ReactQuill from 'react-quill';
import React, { useState, useEffect } from "react";
import 'react-quill/dist/quill.snow.css';
import { useOutletContext } from "react-router-dom";



function NoteEditor() {
    // This is taking the outlet information
    const [notesList, activeNote] = useOutletContext();
    // This is setting values from the React Quill Editor
    const [value, setValue] = useState('');
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

    // Retrieving date and formatting for the input type to output the correct value
    const formatDate = (when) => {
        let formatted = new Date(when).toLocaleString();
        if (formatted === "Invalid Date") {
            return "";
        }
        console.log(formatted);
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

    const [date, setDate] = useState(formatDate(new Date()));

    return (
        <div className="note-content">
            <div className="note-title">
                <div id="information">
                    <input type="text" id="note-edit-title"></input>
                    <div className="date">
                        <input id="datetime" type="datetime-local" value={date} onChange={(newValue) => setDate(newValue.target.value)}/>
                    </div>
                </div>

                <div id="buttons">
                    <button id="save">Save</button>
                    <button id="delete">Delete</button>
                </div>

                
            </div>
            <div id="editor">
                <ReactQuill value={value} onChange={setValue}/>
            </div>
        </div>
        
    )
}

export default NoteEditor;