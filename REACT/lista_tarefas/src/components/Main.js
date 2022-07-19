import React, { Component } from 'react';
import './Main.css';
// import { FaPlus } from 'react-icons/fa';
import { FaPlus, FaEdit, FaWindowClose } from 'react-icons/fa';

export default class Main extends Component {
  state = { // class fields -> recurso novo do JS
    novaTarefa: '',
    tarefas: ['Make some coffee', 'Drink water'],
  };

  handleInputChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };

  render() {
    const { novaTarefa, tarefas } = this.state;
    return (
      <div className="main">
        <h1>Lista de atividades</h1>
        <form action="#" className="form">
          <input onChange={this.handleInputChange} type="text" value={novaTarefa} />
          <button type="submit">
            <FaPlus />
          </button>
        </form>
        <ul className="tarefas">
          {tarefas?.map((tarefa) => (
            <li key={tarefa}>
              {tarefa}
              <div>
                <FaEdit className="edit" />
                <FaWindowClose className="delete" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
