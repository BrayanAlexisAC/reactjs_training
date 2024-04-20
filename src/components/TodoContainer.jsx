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
import { TodoModal } from "./common/TodoModal";
import { TodoAddModal } from "./TodoAddModal";
import { Toaster} from "sonner";

function TodoContainer() {
  const {
    localStorageStatus,
    filterTodos,
    todoModal
  } = React.useContext(TodoContext)
  return React.createElement(
    'div',
    {className : 'todoContainer'},
    <React.Fragment>
      <TodoMessage />
      <Toaster position="top-center" richColors />
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
      />
      {
        todoModal.open &&
          <TodoModal>
            <TodoAddModal/>
          </TodoModal>
      }
    </React.Fragment>
  );
}

export {TodoContainer};
