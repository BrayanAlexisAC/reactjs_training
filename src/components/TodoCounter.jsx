import { createElement , useContext} from 'react';
import { TodoContext } from '../contexts/TodoContext';

import '../assets/styles/TodoCounter.css'

function TodoCounter() {
  const {
    todoCompleted,
    todoElements,
    localStorageStatus
  } = useContext(TodoContext)
  return createElement(
    'div',
    {className: 'todoCounterContent'},
    createElement(
      'h1',
      {className: 'todoTitleCounter'},
      'Pendientes',
    ),
    createElement(
      'p',
      {className: 'todoCounter'},
      localStorageStatus.isLoading && <>Calculando...</>,
      !localStorageStatus.isLoading && <>Has Completado <b>{todoCompleted}</b> de <b>{todoElements.length}</b> Tareas</>
    )
  );
}

export { TodoCounter };
