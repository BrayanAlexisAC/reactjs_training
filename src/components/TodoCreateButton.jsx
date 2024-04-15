import React from 'react';
import '../assets/styles/TodoCreateButton.css'
import { TodoContext } from '../contexts/TodoContext';

function TodoCreateButton({ type }) {
  const {
    todoModal,
    addTodos
  } = React.useContext(TodoContext)
  return React.createElement(
    'button',
    {
      className: `create-button ${todoModal.open && `create-button-active`}`,
      onClick: addTodos
    },
    type
  )
}

export { TodoCreateButton };
