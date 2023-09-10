import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createEntry(itm) {
  return <Entry key={itm.id} emoji={itm.emoji} name={itm.name} meaning={itm.meaning} />
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">

        {emojipedia.map(createEntry)}

      </dl>
    </div>
  );
}

export default App;
