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
  return React.createElement(
    'div',
    {className : 'todoContainer'},
    <TodoContext.Consumer>
      {({
        todoCompleted,
        todoElements,
        localStorageStatus,
        searchValue,
        setSearchValue,
        filterTodos,
        selectVerification,
        todoDelete
      }) => (
      <React.Fragment>
        <TodoMessage/>
        <TodoCounter 
          finishNumber={todoCompleted} 
          totalTodoThings={todoElements.length} 
        />
        <TodoSearch 
          searchValue={searchValue} 
          setSearchValue={setSearchValue}
        />
        <TodoList>
          {localStorageStatus.isLoading && <LoadingIcon/>}
          {/* show error message like a notification  */}
          {localStorageStatus.hasError && 'Ocurrio un error mientras cargaban los datos'}
          { 
            filterTodos.map(((todo) => 
                <TodoItem 
                  key={todo.text} todo={todo} 
                  onComplete={() => selectVerification(todo.text)}
                  onDelete={() => todoDelete(todo.text)}
                />
              ))
          }
        </TodoList>
        <TodoCreateButton 
          type={"+"} 
          action={() => alert('Creando...')} 
        />
      </React.Fragment>
      )}
    </TodoContext.Consumer>
  );
}

export {TodoContainer};
