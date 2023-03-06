import { useNavigate, Link } from "react-router-dom";

function Sidebar({ visibility, notesList, createNewNote, changeActiveNote, activeNote }) {
    const visibilityClass = visibility ? "hidden" : "";
    const navigate = useNavigate();

   

    const removeHtmlTags = (stringWithTags) => {
        const temporaryElement = document.createElement("div");
        temporaryElement.innerHTML = stringWithTags;
        return temporaryElement.innerText;

    }

   
    return (
        <div id="note-list" className={visibilityClass}>
            <div id="note-list-header">
                <h3 id="note-list-header-text">Notes</h3>
                <button id="add-new" onClick={createNewNote}>&#43;</button>
            </div>
            {notesList.length > 0 ? (
                <div id="note-identifiers">
                    {notesList.map((note, index) => (
                        <Link to={`/notes/${index + 1}`}>
                            <div key={note.id} className={`note-item ${note.id === activeNote.id ? "clicked" : ""}`} onClick={() => changeActiveNote(note)}>
                                <div className="note-item-title">
                                    <strong>{note.title}</strong>
                                </div>
                                <div className="note-item-date">
                                    {note.date}
                                </div>
                                <div className="note-item-preview">
                                    {removeHtmlTags(note.body).substring(0, 20) + "\n" + removeHtmlTags(note.body).substring(20, 38) + "..."}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            ) : (
                <p id="no-note-yet">No Note Yet</p>
            )}
        </div>
    )
}

export default Sidebar;
