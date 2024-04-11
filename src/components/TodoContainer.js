import "../assets/styles/TodoContainer.css";
import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { TodoCreateButton } from "./TodoCreateButton";
import { TodoMessage } from "./TodoMessage";

function TodoContainer({
  todoCompleted,
  todoElements,
  searchValue,
  setSearchValue,
  filterTodos,
  selectVerification,
  todoDelete
}) {
  return React.createElement(
    'div',
    {className : 'todoContainer'},
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
  );
}

export {TodoContainer};
