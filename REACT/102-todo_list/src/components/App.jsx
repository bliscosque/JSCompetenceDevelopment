import React from "react";

function App() {
  const [item,setItem]=React.useState("")
  const [itemList,setItemList]=React.useState(["A Item"])

  function handleClick(ev) {
    setItemList(prevList => {
        return ([...prevList,item])
    })
    setItem("")
  }

  function handleChange(ev) {
    setItem(ev.target.value)
  }
  function displayItems(i) {
    return (<li>{i}</li>)
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={item} onChange={handleChange}/>
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {itemList.map(displayItems)}
        </ul>
      </div>
    </div>
  );
}

export default App;
