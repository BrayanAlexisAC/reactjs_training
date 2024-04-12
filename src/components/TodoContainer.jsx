import "../assets/styles/TodoContainer.css";
import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { TodoCreateButton } from "./TodoCreateButton";
import { TodoMessage } from "./TodoMessage";
import { LoadingIcon } from "./icons/LoadingIcon";
import { TodoContext } from "../contexts/TodoContext";

function TodoContainer() {
  const {
    localStorageStatus,
    filterTodos
  } = React.useContext(TodoContext)
  return React.createElement(
    'div',
    {className : 'todoContainer'},
    <React.Fragment>
      <TodoMessage />
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {localStorageStatus.isLoading && <LoadingIcon/>}
        {/* show error message like a notification  */}
        {localStorageStatus.hasError && 'Ocurrio un error mientras cargaban los datos'}
        { 
          filterTodos.map(((todo) => 
              <TodoItem key={todo.text} todo={todo} />
            ))
        }
      </TodoList>
      <TodoCreateButton 
        type={"+"} 
        action={() => alert('Creando...')} 
      />
    </React.Fragment>
  );
}

export {TodoContainer};
