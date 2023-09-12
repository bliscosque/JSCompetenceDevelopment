import React from "react";
import { useState } from "react";

function App() {
  const [name, setName]=useState("")
  const [headingText, setHeading]=useState("")
  function handleEvent(ev) {
    setName(ev.target.value) //target is the elem that triggered the ev
  }
  function handleClick(ev) {
    setHeading(name)
    ev.preventDefault() // no page refresh
  }

  return (
    <div className="container">
      <form onSubmit={handleClick}>
        <h1>Hello {headingText}</h1>
        <input type="text" placeholder="What's your name?" onChange={handleEvent} value={name}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
