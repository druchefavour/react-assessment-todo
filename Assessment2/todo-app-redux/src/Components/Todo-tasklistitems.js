import React from 'react';
import {ToDoDescription} from './Todo-description';
import { getVisibleTodos, Footer } from './Todo-filter';

export class ToDoTaskList extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
  
      return (
         <div>
          <h2>Take the dog for a walk <button type="button">Complete</button></h2>
          <hr />
          <h6 className='desc'>Description</h6>
          <hr />
          <div>
            <Footer />
            <getVisibleTodos />
        </div>
          <ToDoDescription />
        </div> 
      );
    }
  }
  