import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {ToDoList} from './Todo-list';

export const ToDoRouter = () => (
  <Router>
    <div>
      <ul>
          <Link to="/"><input type="button" value="<" />Back to Tasks</Link>
      </ul> 
      <hr />
      <div className="desc">
        <Link to="todos">ToDoList</Link>
        <Route path="/task" component={ToDoList} />
      </div>
    </div>
  </Router>
);

const BackToTask = () => (
  <div>
    <h2>Back to Task</h2>
  </div>
);