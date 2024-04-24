import { createElement } from 'react'
import '../assets/styles/TodoMessage.css'

function TodoMessage() {

  return createElement(
    'div',
    {
      className:'modal fade', 
      id: 'modalMessage',
      tabIndex: '-1',
      "aria-labelledby":"modalMessageLabel",
      "aria-hidden":"true"
    },
    <div className="modal-dialog">
      <div className="modal-content-success">
        <h4 className="modal-title modal-msg-congrats" id="modalMessageLabel"> Felicidades <br/> Completaste todas las tareas </h4>
      </div>
    </div>
  )
}

export {TodoMessage}