import React from 'react';
import '../assets/styles/TodoCreateButton.css'
import { TodoContext } from '../contexts/TodoContext';

function TodoCreateButton({ type }) {
  const {
    todoModal,
    cahngeStateTodoModal
  } = React.useContext(TodoContext)
  return React.createElement(
    'button',
    {
      className: 'create-button ' + (todoModal.open && 'create-button-active'),
      onClick: cahngeStateTodoModal
    },
    type
  )
}

export { TodoCreateButton };
