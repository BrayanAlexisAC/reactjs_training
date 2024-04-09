import "../assets/styles/TodoContainer.css";
import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { TodoCreateButton } from "./TodoCreateButton";

const defaultElements = [
  { text: "Buscar Notas Cursos Html, Css", completed: false },
  { text: "Iniciar curso introduccion Reactjs", completed: true },
  { text: "Iniciar curso Sprgin JPA", completed: true },
  { text: "Completar Path Amazon Web Services", completed: false },
  { text: "Relizar Decalacion anual", completed: true },
];

function TodoContainer() {
  let [todoElements, setTodoElements] = React.useState(defaultElements)
  let [searchValue, setSearchValue] = React.useState('')
  let todoCompleted = todoElements.filter(todo => todo.completed).length
  
  return React.createElement(
    'div',
    {className : 'todoContainer'},
    <React.Fragment>
      <TodoCounter finishNumber={todoCompleted} totalTodoThings={todoElements.length} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
      <TodoList>
        {todoElements.map((object) => (
          <TodoItem key={object.text} todo={object} />
        ))}
      </TodoList>
      <TodoCreateButton type={"+"} action={() => alert('Creando...')} />
    </React.Fragment>
  );
}

export {TodoContainer};
