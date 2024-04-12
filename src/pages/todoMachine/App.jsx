import React from 'react'
import { TodoContainer } from '../../components/TodoContainer'
import { TodoProvider } from '../../contexts/TodoContext'



function App() {
  return (
    <TodoProvider>
      <TodoContainer/>
    </TodoProvider>
  )
}

export {App}