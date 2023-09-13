import React, { useState } from "react";

function App() {

  const [fullName, setFullname]=useState({fName:"",lName:""})

  function handleChange(ev) {
    const {value,name}=ev.target
    setFullname(prevValue => {
        if (name==="fName")
            return {
                fName:value,
                lName: prevValue.lName
            }
        else if (name==="lName") 
            return {
                fName: prevValue.fName,
                lName: value
            }
    })
  }

  return (
    <div className="container">
      <h1>Hello {fullName.fName} {fullName.lName}</h1>
      <form>
        <input name="fName" placeholder="First Name" onChange={handleChange} value={fullName.fName}/>
        <input name="lName" placeholder="Last Name" onChange={handleChange} value={fullName.lName}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
