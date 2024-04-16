import React from 'react'
import { TodoContainer } from '../../components/TodoContainer'
import { TodoProvider } from '../../contexts/TodoContext'

import '../../assets/styles/TodoMachine.css'

function App() {
  return React.createElement(
    'div',
    {className: 'todoMachineWarapper'},
    <TodoProvider>
      <TodoContainer/>
    </TodoProvider>
  )
}

export {App}