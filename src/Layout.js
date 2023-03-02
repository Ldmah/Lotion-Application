import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from './Sidebar';
import NoteEditor from './NoteEditor';

// Layout is what controls all your logic for the content


// const [isHidden, toggleHidden] = useState(false); // Default state is false
// function toggleNoteVisibility() { // Function that is called if button is clicked
//     toggleHidden(!isHidden);
//   }

function Layout() {   
    return (
        <>
            <div id="title-bar">
                <button id="show-notes">&#9776;</button>
                <div id="title">
                    <h1>Lotion</h1>
                    <p id="description"><strong>Like Notion, but worse.</strong></p>
                </div>
            </div>

            <div id="content">
                <Sidebar />
                <Outlet  />
            </div>

        </>
    )
}

export default Layout;
