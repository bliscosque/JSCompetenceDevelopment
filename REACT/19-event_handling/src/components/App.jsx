import React from "react";

function App() {
  const [headingText,setHeadingText]=React.useState('Hello')
  const [isMouseOver,setIsMouseOver]=React.useState(false)

  function handleClick() {
    setHeadingText("Submitted")
  }

  function handleMouseOver() {
    setIsMouseOver(!isMouseOver)
  }

  return (
    <div className="container">
      <h1 style={isMouseOver?{backgroundColor: null}: {backgroundColor: "black"}}>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button onClick={handleClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOver}>Submit</button>
    </div>
  );
}

export default App;
