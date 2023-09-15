import React from "react";
import { useState } from "react";

function CreateArea(props) {

  const [note,setNote]=useState({title:"",content:""})
  function handleChange(ev) {
    const {value,name}=ev.target
    setNote(prevNote => {
        return {
            ...prevNote,
            [name]:value
        }
    })
    //console.log(note)
  }

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={handleChange} value={note.title}/>
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleChange} value={note.content}/>
        <button onClick={(event) => {
            props.addNote(note)
            console.log(note)
            setNote({title:"",content:""})
            event.preventDefault()
        }}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
