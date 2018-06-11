import React from 'react';
import Header from './Components/Header';
import ToDoRouter from './Components/Todo-router';

export class App extends React.Component {
  render() {
    return (
         <div className="grid-column-start: 4" className="grid-column-end:6">
            <Header />
            <ToDoRouter />
        </div>
    );
  }
}
