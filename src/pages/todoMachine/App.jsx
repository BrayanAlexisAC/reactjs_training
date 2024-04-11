import React from 'react'
import { Modal } from "bootstrap";
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { TodoContainer } from '../../components/TodoContainer'

const LOCALSTORAGE_TODOs = 'TODOs_v1'

function App() {
  const [todoElements, updateItem] = useLocalStorage(LOCALSTORAGE_TODOs, [], true)
  const [searchValue, setSearchValue] = React.useState('')
  const todoCompleted = todoElements.filter(todo => todo.completed).length

  const filterTodos = todoElements.filter((element) => {
    let todoDescription = element.text.toLowerCase()
    let searchText = searchValue.toLowerCase()
    return todoDescription.includes(searchText)
  })

  const selectVerification = (key) => {
    let newTodos = [...todoElements]
    let index = newTodos.findIndex((element) => element.text === key)
    newTodos[index].completed ? newTodos[index].completed = false : newTodos[index].completed = true
    updateItem(newTodos)
    validatePendingTodos(newTodos)
  }

  const validatePendingTodos = (todoElements) => {
    let todosPending = todoElements.filter((todo) => todo.completed === false)
    if (todosPending.length <= 0) {
      let myModal = new Modal(document.getElementById("modalMessage"), {});
      myModal.show()
    }
  }

  const todoDelete = (key) => {
    let newTodos = [...todoElements]
    let index = newTodos.findIndex((element) => element.text === key)
    newTodos.splice(index, 1) // delete elements from parameter 1 to prameter 2
    updateItem(newTodos)
  }

  return (
    <TodoContainer
      todoCompleted={todoCompleted}
      todoElements={todoElements}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      filterTodos={filterTodos}
      selectVerification={selectVerification}
      todoDelete={todoDelete}
    />
  )
}

export {App}