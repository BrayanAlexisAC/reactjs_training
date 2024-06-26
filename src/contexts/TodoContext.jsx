import React from 'react'

import { Modal } from "bootstrap";
import { useLocalStorage } from '../hooks/useLocalStorage';
import { toast } from 'sonner';

const TodoContext = React.createContext()

const LOCALSTORAGE_TODOs = 'TODOs_v1'

function TodoProvider({children}) {
  const [searchValue, setSearchValue] = React.useState('')
  const [openTodoModal, setOpenTodoModal] = React.useState(false);
  const data = useLocalStorage(LOCALSTORAGE_TODOs, [], true)
  const todoCompleted = data.item.filter(todo => todo.completed).length
  
  const filterTodos = data.item.filter((element) => {
    let todoDescription = element.text.toLowerCase()
    let searchText = searchValue.toLowerCase()
    return todoDescription.includes(searchText)
  })

  const selectVerification = (key) => {
    let newTodos = [...data.item]
    let index = newTodos.findIndex((element) => element.text === key)
    newTodos[index].completed ? newTodos[index].completed = false : newTodos[index].completed = true
    data.updateItem(newTodos)
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
    let newTodos = [...data.item]
    let index = newTodos.findIndex((element) => element.text === key)
    newTodos.splice(index, 1) // delete elements from parameter 1 to prameter 2
    data.updateItem(newTodos)
    toast.info('Tarea Eliminada')
  }

  const addTodos = (description) => {
    if (description.length > 0) {
      let newTodos = [...data.item]
      let todoExist = newTodos.filter((todo) =>{
        let lowerDescription = description.toLowerCase().replace(' ','')
        let lowerTextTodos = todo.text.toLowerCase().replace(' ','');
        return lowerTextTodos.includes(lowerDescription)
      })
      if (todoExist.length === 0) {
        newTodos.push({
          text: description,
          completed: false
        })
        data.updateItem(newTodos)
        setOpenTodoModal(!openTodoModal)
        toast.success('Tarea Agregada')
      } else {
        toast.error('No es posible agregar una tarea repetida')
      }
    } else {
      toast.error("No puedes agregar una tarea con descripcion vacia");
    }
  }

  const cahngeStateTodoModal = () => {
    setOpenTodoModal(!openTodoModal)
  }
  
  return (
    <TodoContext.Provider value={{
      todoCompleted,
      todoElements: data.item,
      localStorageStatus: {
        isLoading: data.isLoading,
        hasError: data.hasError
      },
      searchValue,
      setSearchValue,
      filterTodos,
      selectVerification,
      todoDelete,
      todoModal: {
        open: openTodoModal,
        setOpen: setOpenTodoModal
      },
      cahngeStateTodoModal,
      addTodos
    }}>
      {children}
    </TodoContext.Provider>
  )
}

export { TodoContext , TodoProvider}