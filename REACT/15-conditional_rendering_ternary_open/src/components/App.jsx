import React from "react";
import Login from "./Login";

let isLoggedIn = false

const currentTime=new Date().getHours()

function App() {
  return (
    <div className="container">
        {/* Ternary Operator */}
        {isLoggedIn?<h1>Hello</h1> : <Login />}
        {/* AND Operator - If 1st is true, run the second */}
        {currentTime>17 && <h1>Why working???</h1>}
    </div>
  );
}

export default App;
