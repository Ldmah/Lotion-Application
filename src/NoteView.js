import { useOutletContext, useNavigate, useParams } from "react-router-dom";

function NoteView() {
    const [notesList, activeNote, deleteCurrentNote, saveNote] = useOutletContext();
    const navigate = useNavigate();
    const returnAsHtml = (string) => {
        return {__html: string};
    }

    // Implement loop to find the noteId manually and put it in since /1, /2 works
    // Iterate through and try to match the activeNote withinthe notesList, find an integer and put it into navigate
    
    const navToEdit = () => {
        const activeNoteIndex = notesList.findIndex(note => note.id === activeNote.id) + 1;
        navigate(`/notes/edit/${activeNoteIndex}`);
    }

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
                            <button id="edit" onClick={(navToEdit)}>Edit</button>
                            <button id="delete" onClick={() => {
                                deleteCurrentNote(activeNote);
                            }}>Delete</button>

                        </div>
                    </div>
                    <div id="content-view" dangerouslySetInnerHTML={returnAsHtml(activeNote.body)}>
                    </div>
                </>
            )}
        </div>
        
    )
}

export default NoteView;
