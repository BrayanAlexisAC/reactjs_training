import React from 'react'

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
     <button className='button-cancel' onClick={() => alert('cancelar...')}>Cancelar</button>, // Add Component to buttons
     <button className='button-add' onClick={() => alert('Agregar...')} >Agregar</button>
    )
  )
}

export default TodoAddModal