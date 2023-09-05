//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from 'react'
import ReactDOM from 'react-dom'

let hh=new Date().getHours()
let greet='Good Morning'
let c="red"
if (hh>12 && hh<18) {
    greet='Good Afternoon'
    c="green"
}
else if (hh>18) {
    greet='Good evening'
    c="blue"
}

ReactDOM.render(<div><h1 className='heading' style={{color:c}}>{greet}</h1></div>,document.getElementById('root'))