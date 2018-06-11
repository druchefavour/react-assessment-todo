import React from 'react';

import './ToDoDescription.css';

export class ToDoDescription extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        isEditing: false,
        isComplete: true
      };
    }

    onSaveClick(event) {
      event.preventDefault;

      const oldTask = this.props.Task;
      const newTask = this.refs.editInput.value;

      this.props.saveTask(oldTask, newTask);

      this.setState({ isEditiing: false })

    }

    renderDescription() {
      const { task, isCompleted } = this.props;

      if (this.state.isEditing) {
        return (
          <td>
            <form onSubmit={this.onSaveClick.bind(this)}>
              <input type="text" defaultvalue={task} ref="editInput" />
            </form>        
          </td>
            
        )
      }
    };


    render() {
      return (
      <div>
        <div>
            <h2 className="itemDes">Take George out again. He hasn't been walked in weeks</h2>
        </div>
        <hr />
        <div>
            <button onClick={this.onSaveClick.bind(this)}>Save</button>
            <button type="button">Cancel</button>
            <button type="button">Delete</button>
        </div>
      </div>
      );
    }
  }
  