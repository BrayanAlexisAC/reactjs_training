import React from 'react'
import { TodoButton } from './common/TodoButton'

import '../assets/styles/TodoAddModal.css'
import { TodoContext } from '../contexts/TodoContext'

function TodoAddModal() {
  const {
    cahngeStateTodoModal,
    addTodos
  } = React.useContext(TodoContext)
  return React.createElement(
    'div',
    {
      className: 'todoAddContentModal'
    },
    <h6 className='todoAddTitleModal'> Escribe tu <br/> nuevo TODO </h6>,
    <textarea id='todoAddDescriptionModal' className='todoAddDescriptionModal' type="text" placeholder='Hacer las compras'/>,
    React.createElement(
     'div',
     {
      className: 'todoAddButtonsModal'
     },
    <TodoButton 
      type={'Cancelar'} 
      label={'Cancelar'}
      action={cahngeStateTodoModal}
    />,
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