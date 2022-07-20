import React, { Component } from 'react';
import './Main.css';
// import { FaPlus } from 'react-icons/fa';
import { FaPlus, FaEdit, FaWindowClose } from 'react-icons/fa';

export default class Main extends Component {
  state = { // class fields -> recurso novo do JS
    novaTarefa: '',
    tarefas: [],
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { tarefas } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim();

    if (tarefas.indexOf(novaTarefa) !== -1) return;

    const novasTarefas = [...tarefas];
    this.setState({
      tarefas: [...novasTarefas, novaTarefa],
    });
  };

  handleInputChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };

  handleEdit = (e, index) => {
    console.log('Edit: ', e, index);
  };

  handleDelete = (e, index) => {
    const { tarefas } = this.state;
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1);
    this.setState({
      tarefas: [...novasTarefas],
    });
  };

  render() {
    const { novaTarefa, tarefas } = this.state;
    return (
      <div className="main">
        <h1>Lista de atividades</h1>
        <form onSubmit={this.handleSubmit} action="#" className="form">
          <input onChange={this.handleInputChange} type="text" value={novaTarefa} />
          <button type="submit">
            <FaPlus />
          </button>
        </form>
        <ul className="tarefas">
          {tarefas?.map((tarefa, index) => (
            <li key={tarefa}>
              {tarefa}
              <span>
                <FaEdit onClick={(e) => this.handleEdit(e, index)} className="edit" />
                <FaWindowClose onClick={(e) => this.handleDelete(e, index)} className="delete" />
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
