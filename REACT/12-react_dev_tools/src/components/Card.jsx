import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";

function Card(props) {
    return (
        <div>
            <div className="card">
            <div className="top">
                <h2 className="name">{props.name}</h2>
                <Avatar imgURL={props.imgURL}/>
            </div>
            <div className="bottom">
                <Detail txt={props.phone}/>
                <Detail txt={props.email}/>
            </div>
        </div>
    </div>
  )
}

export default Card