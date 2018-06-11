import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

class ToDoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      isComplete: true
    };
  }

  renderTaskSections() {
    const { task, isCompleted } = this.props;

    const taskStyle = {
      color: isCompleted ? "green" : "blue",
      cursor: "pointer"
    };

    return (
      <td style={taskStyle}
        onClick={this.props.toggleTask.bind(this, task)}
      > 
        {task}</td> 
    );
  }

  renderActionSections() {
    if (this.state.isEditing) {
      return (
        <tr> 
          <td>{this.props.task}</td>
          <td>
            <button type="button" disabled>Completed</button> { ` | ` }
            <button onClick={this.onCancelClick.bind(this)}>Cancel </button>
          </td> 
        </tr>
      );
    }
  return(
    <td>
       <button onClick={this.onEditClick.bind(this)}>Complete</button> { ` | ` }
       <button onClick={this.props.DeleteTask.bind(this, this.props.task)}>x</button>
    </td> 
  )
}

render() {
    return (
         <tr>
            {this.renderTaskSections()}
            {this.renderActionSections()}
         </tr>               
    );
  }

  onEditClick() {
    this.setState({ isEditing: true});
  }

  onCancelClick() {
    this.setState({ isEditing: false});

  }
}

ToDoListItem.propTypes = {
  onClick: PropTypes.func,
  isCompleted: PropTypes.bool,
  task: PropTypes.string
}
export default  ToDoListItem;