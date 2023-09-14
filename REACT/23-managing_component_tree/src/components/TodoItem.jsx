import React from "react";

function TodoItem(props) {

    return  (<li onClick={() => {props.onChecked(props.id)}}>{props.todoItem}</li>)
}

export default TodoItem