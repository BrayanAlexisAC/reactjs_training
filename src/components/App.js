import "../App.css";
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

function App() {
  return (
    <React.Fragment>
      <TodoCounter finishNumber={9} totalTodoThings={20} />
      <TodoSearch />
      <TodoList>
        {defaultElements.map((object) => (
          <TodoItem key={object.text} todo={object} />
        ))}
      </TodoList>
      <TodoCreateButton type={"Create"} />
    </React.Fragment>
  );
}

export default App;
