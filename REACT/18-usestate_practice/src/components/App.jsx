import React from "react";

function App() {
  let time = new Date().toLocaleTimeString();
  const [stateTime,setStateTime]=React.useState(time)
  function updateTime() {
    setInterval( () => {setStateTime(new Date().toLocaleTimeString())}, 100)
  }

  return (
    <div className="container">
      <h1>{stateTime}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
