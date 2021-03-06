import _ from 'lodash';
import React from 'react';
import { connect } from "react-redux";
import CreateToDo from './createTodo';
import { ToDoList } from './Todo-list';

const todos = [
  {
      task: 'Walk the Dog',
      description: 'The dog needs to be walked',
      isCompleted:true
  },
  {
      task: 'Take out the trash',
      description: 'The trash bag is filled',
      isCompleted:false
  }
]

export class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      todos
    };
  }

  render() {
    
    return (
      <div className="App" className="grid-container">
        <div className="item1">
          <CreateToDo todos={this.state.todos} CreateTask={this.CreateTask.bind(this)}/>
          <hr />
          <ToDoList 
              todos = {this.state.todos}
              toggleTask = {this.toggleTask.bind(this)}
              SaveTask = {this.SaveTask.bind(this)}
              DeleteTask = {this.DeleteTask.bind(this)}
              
          />
         </div>
      </div>
    );
  }

  toggleTask(task) {
    const foundTodo = _.find(this.state.todos, todo => todo.task === task);
    foundTodo.isCompleted =!foundTodo.isCompleted;
    this.setState({ todos: this.state.todos })
  }

  CreateTask(task, description) {
     this.state.todos.push ({
       task,
       description,
       isCompleted: false
     }) 

     this.setState({ todos: this.state.todos});
    
     console.log(task);
  }

SaveTask(oldTask, newTask) {
  const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);
  foundTodo.task = newTask ;
  this.setState({ todos: this.state.todos })
}

DeleteTask(taskToDelete) {
  _.remove(this.state.todos, todo => todo.task === taskToDelete);
  this.setState({ todos: this.state.todos });
 }
}
