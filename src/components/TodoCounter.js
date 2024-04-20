import React from 'react';
import { TodoContext } from '../contexts/TodoContext';

import '../assets/styles/TodoCounter.css'

function TodoCounter() {
  const {
    todoCompleted,
    todoElements
  } = React.useContext(TodoContext)
  return React.createElement(
    'div',
    {className: 'todoCounterContent'},
    React.createElement(
      'h1',
      {className: 'todoTitleCounter'},
      'Pendientes',
    ),
    React.createElement(
      'p',
      {className: 'todoCounter'},
      <>Has Completado <b>{todoCompleted}</b> de <b>{todoElements.length}</b> Tareas</>
    )
  );
}

export { TodoCounter };
