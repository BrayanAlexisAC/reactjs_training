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
  const [todoElements, setTodoElements] = React.useState(defaultElements)
  const [searchValue, setSearchValue] = React.useState('')
  const todoCompleted = todoElements.filter(todo => todo.completed).length
  const filterTodos = todoElements.filter((element) => {
    let todoDescription = element.text.toLowerCase()
    let searchText = searchValue.toLowerCase()
    return todoDescription.includes(searchText)
  })
  
  return React.createElement(
    'div',
    {className : 'todoContainer'},
    <React.Fragment>
      <TodoCounter finishNumber={todoCompleted} totalTodoThings={todoElements.length} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
      <TodoList>
        { 
          filterTodos.map((
              (todo) => <TodoItem key={todo.text} todo={todo} />
            ))
        }
      </TodoList>
      <TodoCreateButton type={"+"} action={() => alert('Creando...')} />
    </React.Fragment>
  );
}

export {TodoContainer};
