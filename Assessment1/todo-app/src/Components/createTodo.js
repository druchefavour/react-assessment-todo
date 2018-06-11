import _ from 'lodash';
import React from 'react';
import {ToDoDescription} from './Todo-description';

export default class CreateToDo extends React.Component {
  constructor(props) {
    super();
    this.handleCreate = this.handleCreate.bind(this);
    this.DeleteToDo = this.DeleteToDo.bind(this);
  
    this.state = {
      todos: [],
      isCompleted:false,
      title: "React Todos App",
      newTodoId: 0,
      error: null
    }
   }
  
   renderError() {
    if(!this.state.error) { return null; }
    return <div style={{ color: 'red' }}>{this.state.error}</div>
  }
  
   DeleteToDo() {
    let todos = this.state.todos;
   }
  
  handleCreate(event) {
    event.preventDefault();
    let name = this.refs.createInput;
    let task = name.value
    let description = this.refs.createDescription.value;
    let newTodoId = this.state.newTodoId;
    let validateInput = this.validateInput(task);
  
    if (validateInput) {
      this.setState({ error: validateInput });
      return;
    }
    this.setState({ error: null });
    this.props.CreateTask(task);
    this.refs.createInput.value = "";
  }
  
    validateInput(task) {
      if (!task) {
        alert('Please Enter a task!');
      } else if (_.find(this.props.todos, todo => todo.task === task)) {
        alert('Task already exist');
      } else {
        return null;
      }
  }
  
  render() {
    let title = this.state.title;
    let todos = this.state.todos;
    return (
      <div>
        <h1>{title}</h1>
        <form onSubmit={this.handleCreate.bind(this)}>
        <input type="text" placeholder="Title" ref= "createInput" />
        <input type="text" placeholder="Description" ref="createDescription" />
        <button>Add New Todo</button>
        {this.renderError()}
    </form>
  </div>
    );
    <ToDoDescription 
    id
    title
    description
    task
    />
  }
}