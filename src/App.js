import { BrowserRouter, Routes, Route, useParams, Navigate, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import Layout from "./Layout";
import NoteView from "./NoteView"
import NoteEditor from "./NoteEditor"

// Controls all your routing logic

function App() {
  
  
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/notes" element={<NoteView />}></Route> 
          <Route path="/notes/edit/:noteId" element={<NoteEditor />}></Route>
          <Route path="/notes/:noteId" element={<NoteView />}></Route>
          <Route path="/" element={<Navigate to ="/notes" />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
