function App() {
  return (
    <>
      <div id="title-bar">
        <button id="showNotes">&#9776;</button>
        <div id="title">
          <h1>Lotion</h1>
          <p id="description"><strong>Like Notion, but worse.</strong></p>
        </div>
      </div>
      <div id="content">
        <div id="noteList">
          <div>
            <h3>Notes</h3>
          </div>
          <div>
            <button id="addNew">&#43;</button>
          </div>
        </div>
        <div id="noteContent">
          Select a note, or create a new one.
        </div>
      </div>
    </>
  );
}

export default App;
