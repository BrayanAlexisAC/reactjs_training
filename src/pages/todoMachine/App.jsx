import React from 'react'
import { TodoContainer } from '../../components/TodoContainer'
import { TodoProvider } from '../../contexts/TodoContext'
import { TodoImage } from '../../components/common/TodoImage'
import pathBackGroundImg from '../../assets/images/ReactToolKit_Banner-1200x500.webp'

import '../../assets/styles/TodoMachine.css'

function App() {
  return React.createElement(
    'div',
    {className: 'todoMachineWrapper'},
    <TodoProvider>
      <TodoImage 
        name={'todo-background'}
        src={pathBackGroundImg}
        alt={'React Background'}
      />
      <TodoContainer/>
    </TodoProvider>
  )
}

export {App}