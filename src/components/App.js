import '../App.css';
import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoCreateButton } from './TodoCreateButton';

function App() {
  return (
    <React.Fragment>
        <TodoCounter finishNumber={9} totalTodoThings={20} />
        <TodoSearch/>
        <TodoList>
          <TodoItem description={'Buscar Notas Cursos Html, Css'}/>
          <TodoItem description={'Estudiar Spring JPA'}/>
          <TodoItem description={'Aprender Amazon Web Services'}/>
        </TodoList>
        <TodoCreateButton type={'Create'} />
    </React.Fragment>
  );
}

export default App;
