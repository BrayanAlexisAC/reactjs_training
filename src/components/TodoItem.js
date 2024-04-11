import { VerificationIcon } from './icons/VerificationIcon';
import { CancelIcon } from './icons/CancelIcon';
import '../assets/styles/TodoItem.css'
import '../assets/styles/icons/VerificationIcon.css'
import '../assets/styles/icons/CancelIcon.css'

function TodoItem(props) {
  return (
    <li className="todoItem">
      <VerificationIcon completed={props.todo.completed} onComplete={props.onComplete}/>
      <p className={'todoItem-text ' + (props.todo.completed ? 'complete-mark' : '')}>
        {props.todo.text}
      </p>
      <CancelIcon onDelete={props.onDelete}/>
    </li>
  );
}

export { TodoItem };
