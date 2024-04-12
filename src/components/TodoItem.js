import React from 'react';
import { VerificationIcon } from './icons/VerificationIcon';
import { CancelIcon } from './icons/CancelIcon';
import { TodoContext } from '../contexts/TodoContext';

import '../assets/styles/TodoItem.css'
import '../assets/styles/icons/VerificationIcon.css'
import '../assets/styles/icons/CancelIcon.css'

function TodoItem({todo}) {
  const {
    selectVerification,
    todoDelete
  } = React.useContext(TodoContext)
  return (
    <li className="todoItem">
      <VerificationIcon completed={todo.completed} onComplete={() => selectVerification(todo.text)}/>
      <p className={'todoItem-text ' + (todo.completed ? 'complete-mark' : '')}>
        {todo.text}
      </p>
      <CancelIcon onDelete={() => todoDelete(todo.text)}/>
    </li>
  );
}

export { TodoItem };
