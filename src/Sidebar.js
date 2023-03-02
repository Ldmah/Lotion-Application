
function Sidebar() {
    return (
        <div id="note-list"> {/* Ternary operator: will add hidden class if isHidden is true (otherwise nothing) */}
            <div id="note-list-header">
                <h3 id="note-list-header-text">Notes</h3>
                <button id="add-new">&#43;</button>
            </div>
            <div id="note-identifiers">
                <p id="no-note-yet">No Note Yet</p>
            </div>
        </div>
    )
}

export default Sidebar;