import React from 'react'
import ReactDOM from 'react-dom'

import '../../assets/styles/common/TodoModal.css'

function TodoModal(props) {
  return ReactDOM.createPortal(
    React.createElement(
      'div',
      {className: 'noClass'},
      <div className='todoModalContainer'>
        <div className='todoModalContent'>
          {props.children}
        </div>
      </div>,
      <div class="modal-backdrop fade show"></div>
    ),
    document.getElementById('app-modal')
  )
}

export {TodoModal}
