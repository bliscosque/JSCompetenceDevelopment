import React, {Component} from "react";
import './Main.css'
import {FaPlus, faPlus} from 'react-icons/fa'

export default class Main extends Component {
  state = { //class fields -> recurso novo do JS
    novaTarefa: '',
  }

  handleInputChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    })
  }

  render() {
    const {novaTarefa} = this.state;
    return (
      <div className="main">
        <h1>Lista de tarefas</h1>
        <form action="#" className="form">
          <input onChange={this.handleInputChange} type="text" value={novaTarefa}/>
          <button type="submit"><FaPlus /></button>
        </form>
      </div>
    )
  }
}
