import React from 'react';
import { connect } from 'react-redux';
import { VisibilityFilters, setTODOvissibility, toggleTask } from '../Redux/Actions/todoActions';
import SecRouter from './secRouter';
import { ToDoList } from './Todo-list';

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos
            case VisibilityFilters.SHOW_COMPLETED:
              return todos.filter(t => t.completed)
            case VisibilityFilters.SHOW_ACTIVE:
              return todos.filter(t => !t.completed)
            default:
              throw new Error('Unknown filter: ' + filter)
    }
}

export const Footer = () => (
    <div>
      <span>Show: </span>
      <SecRouter filter={VisibilityFilters.SHOW_ALL}>
        All
      </SecRouter>
      <SecRouter filter={VisibilityFilters.SHOW_ACTIVE}>
        Active
      </SecRouter>
      <SecRouter filter={VisibilityFilters.SHOW_COMPLETED}>
        Completed
      </SecRouter>
    </div>
)
   
const mapStateToProps = (state, ownProps) => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
    active: ownProps.filter === state.visibilityFilter
    });

const mapDispatchToProps = (dispatch, ownProps) => ({
 toggleTask: index => dispatch(toggleTask(index)),
 onClick: () => dispatch(setTODOvissibility(ownProps.filter))
    })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoList, SecRouter, Footer)