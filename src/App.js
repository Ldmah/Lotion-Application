import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Sidebar from "./Sidebar";
import NoteView from "./NoteView"
import NoteEditor from "./NoteEditor"

// Controls all your routing logic

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<NoteView />}></Route> 
          {/* Need to add it so that if there are no notes then it displays the default page thing
          Add a path for editing */}
          <Route path="/edit" element={<NoteEditor />}></Route>
          <Route path="/view" element={<NoteView />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
