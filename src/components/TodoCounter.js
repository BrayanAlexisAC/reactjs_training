import React from 'react';
import { TodoContext } from '../contexts/TodoContext';

import '../assets/styles/TodoCounter.css'

function TodoCounter() {
  const {
    todoCompleted,
    todoElements
  } = React.useContext(TodoContext)
  return (
    <h1 className="todoCounter">
      Has completado <br/> <b>{todoCompleted}</b> de <b>{todoElements.length}</b> TODOs
    </h1>
  );
}

export { TodoCounter };
