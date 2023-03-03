function Sidebar({ visibility, notesList, createNewNote }) {
    const visibilityClass = visibility ? "hidden" : "";
    return (
        <div id="note-list" className={visibilityClass}>
            <div id="note-list-header">
                <h3 id="note-list-header-text">Notes</h3>
                <button id="add-new" onClick={createNewNote}>&#43;</button>
            </div>
            {notesList.length > 0 ? (
                <div id="note-identifiers">
                    {notesList.map((note) => ( // Map function is used so that for each element in the noteList, we are adding this HTML
                        <div key={note.id} className="note-item">
                            <div className="note-item-title">
                                <strong>{note.title}</strong>
                            </div>
                            <div className="note-item-date">
                                arbitrary date
                            </div>
                            <div className="note-item-preview">
                                {note.body.substring(0, 20) + "\n" + note.body.substring(20, 38) + "..."}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p id="no-note-yet">No Note Yet</p>
            )}
        </div>
    )
}

export default Sidebar;