import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card name="Beyonce" email="b@beyonce.com" tel="+123 456 789" img_src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" />
    <Card name="Jack Bauer" email="jack@nowhere.com" tel="+987 654 321" img_src="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg" />
    <Card name="Chuck Norris" email="gmail@chucknorris.com" tel="+918 372 574" img_src="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png" />
  </div>,
  document.getElementById("root")
);
