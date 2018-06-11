import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { CreateToDo } from './createTodo';
import {ToDoTaskList} from './ToDoTaskList';

import './ToDoRouter.css';

export const ToDoRouter = () => (
  <Router>
    <div>
      <ul>
          <Link to="/"><input type="button" value="<" />Back to Tasks</Link>
      </ul>
      <hr />
      <div className="desc">
        <Link to="/task">Task</Link>
        <Route path="/task" component={ToDoTaskList} />
      </div>
    </div>
  </Router>
);

const BackToTask = () => (
  <div>
    <h2>Back to Task</h2>
  </div>
);