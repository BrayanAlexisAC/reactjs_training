import React from 'react'
import { TodoButton } from './common/TodoButton'

import '../assets/styles/TodoAddModal.css'

function TodoAddModal() {
  return React.createElement(
    'div',
    {
      className: 'todoAddContentModal'
    },
    <h6 className='todoAddTitleModal'> Escribe tu <br/> nuevo TODO </h6>,
    <textarea className='todoAddDescriptionModal' type="text" placeholder='Hacer las compras'/>,
    React.createElement(
     'div',
     {
      className: 'todoAddButtonsModal'
     },
    <TodoButton 
      type={'Cancelar'} 
      label={'Cancelar'}
      action={() => alert('Cancelar...')}
    />,
    <TodoButton 
      type={'Add'} 
      label={'Agregar'}
      action={() => alert('Agregar...')}
    />
    )
  )
}

export {TodoAddModal}