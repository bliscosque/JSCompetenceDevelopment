import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteList,setNoteList]=React.useState([])
  function addNote(note) {
   setNoteList(prevNoteList => {
    return [...prevNoteList,note]
   })
  }

  function deleteNote(idx) {
    //console.log("delete note: ",idx)
    setNoteList(prevNoteList => {
        return prevNoteList.filter((item,id) => id!==idx)
    })
  }
  //console.log(noteList)
  return (
    <div>
      <Header />
      <CreateArea addNote={addNote}/>
      {noteList.map((note,idx) => {
        return <Note key={idx} idx={idx} title={note.title} content={note.content} deleteNote={deleteNote}/>
      })}
      <Footer />
    </div>
  );
}
//      <Note key={1} title="Note title" content="Note content" />


export default App;
