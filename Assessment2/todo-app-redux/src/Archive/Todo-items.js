import React from 'react';
import { connect } from 'react-redux';
import TaskList from './Task-list';

export class ToDoItem extends React.Component {
  render() {
    return (
      <div>
        <h1>Task List</h1>

        <TaskList todos={this.props.todos} />
      </div>
    );
  }
}

ToDoItem.propTypes = {
  //todos: React.PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return (
    this.props.todos
  );
}

connect(mapStateToProps)(ToDoItem);