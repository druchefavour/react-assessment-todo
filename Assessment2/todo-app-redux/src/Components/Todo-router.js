import React from "react";
import { connect } from 'react-redux';
import { ToDoList } from './Todo-list';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreateToDo from "./createTodo";
import { ToDoDescription } from "./Todo-description";
import PropTypes from 'prop-types';
import { setTODOvissibility } from '../Redux/Actions/todoActions';
import{ Home } from './Home';

class ToDoRouter extends React.Component {
  render() {
    return (<BrowserRouter>
      <Switch>
        <Route exact path="/"  component={Home}></Route>
        <Route path="/back" component={Home}>Back to Tasks </Route>
        <Route path="/description" component={ToDoDescription}></Route>
      </Switch>
    </BrowserRouter>);
  }
}

export default ToDoRouter;
  
