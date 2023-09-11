import React from "react";

function App() {

  const [count,setCount]=React.useState(0)
  function addCount() {
    setCount(count+1)
  }

  return (
    <div className="container">
        <h1>{count}</h1>
        <button onClick={addCount}>+</button>
    </div>
  )
}

export default App;
