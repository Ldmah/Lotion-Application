import { useOutletContext } from "react-router-dom";

function NoteView() {
    const [notesList, activeNote, deleteCurrentNote] = useOutletContext();
    return (
        <div className="note-content">
            {notesList.length == 0 ? (
                <>Select a note, or create a new one.</>
            ) : (
                <>
                    <div id="header">
                        <div id="title-and-date">
                            <div id="view-note-title">
                                <h3 id="view-note-h3">{activeNote.title}</h3>
                            </div>
                            <div id="date-note-view">
                                <p id="written-date">{activeNote.date}</p>
                            </div>
                        </div>
                        <div id="buttons-view">
                            <button id="edit">Edit</button>
                            <button id="delete" onClick={() => {
                                deleteCurrentNote(activeNote);
                            }}>Delete</button>

                        </div>
                    </div>
                    <div id="content-view">
                        {activeNote.body}
                    </div>
                </>
            )}
        </div>
        
    )
}

export default NoteView;