import React from 'react';
import '../assets/styles/TodoCreateButton.css'
import { TodoContext } from '../contexts/TodoContext';
import { AddIcon } from './icons/AddIcon';

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
    <AddIcon color={'white'}/>
  )
}

export { TodoCreateButton };
