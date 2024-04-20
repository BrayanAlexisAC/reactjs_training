import React from 'react'
import { TodoButton } from './common/TodoButton'
import { TodoContext } from '../contexts/TodoContext'

import '../assets/styles/TodoAddModal.css'

function TodoAddModal() {
  const {
    addTodos
  } = React.useContext(TodoContext)
  return React.createElement(
    'div',
    {
      className: 'todoAddContentModal'
    },
    <h6 className='todoAddTitleModal'> Nueva Tarea </h6>,
    <textarea id='todoAddDescriptionModal' className='todoAddDescriptionModal' type="text" placeholder='Hacer las compras'/>,
    React.createElement(
     'div',
     {
      className: 'todoAddButtonsModal'
     },
    <TodoButton 
      type={'Add'} 
      label={'Agregar'}
      action={() => {
        let textArea = document.getElementById('todoAddDescriptionModal')
        let description = textArea.value
        addTodos(description)
      }}
    />
    )
  )
}

export {TodoAddModal}