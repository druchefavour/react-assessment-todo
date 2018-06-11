import _ from 'lodash';
import React from 'react';
import ToDoListHeader from './Todo-list-header';
import ToDoListItem from './Todo-action-item';
import PropTypes from 'prop-types';

export default class ToDoList extends React.Component {

  renderItems() {
    const props = _.omit(this.props, 'todos');
      return _.map(this.props.todos, (todo, index) => <ToDoListItem
    key={index} {...todo} {...props} 
    />);
  
    }
    render() {
      return (
        <table>
          <ToDoListHeader />
            <tbody>
                {this.renderItems()}
            </tbody>
        </table>
      );
    }
  }
  
  ToDoList.propTypes = {
    todos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        isCompleted: PropTypes.bool,
        task: PropTypes.string,
        description: PropTypes.string
      })
    ),
    toggleTask: PropTypes.func
  }