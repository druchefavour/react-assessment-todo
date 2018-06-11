import React from 'react';
import {ToDoRouter} from './ToDoRouter';

import './ToDoDescription.css';

export class ToDoDescription extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
      <div>
        <div>
            <h2 className="itemDes">Take George out again. He hasn't been walked in weeks</h2>
        </div>
        <hr />
        <div>
            <button type="button">Save</button>
            <button type="button">Cancel</button>
            <button type="button">Delete</button>
        </div>
      </div>
      );
    }
  }