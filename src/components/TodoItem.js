import '../assets/styles/TodoItem.css'
import { VerificationIcon } from './icons/VerificationIcon';
import { CancelIcon } from './icons/CancelIcon';

function TodoItem(props) {
  return (
    <li className="todoItem">
      <VerificationIcon onComplete={props.onComplete}/>
      <p className={'todoItem-text ' + (props.todo.completed ? 'complete-mark' : '')}>
        {props.todo.text}
      </p>
      <CancelIcon onDelete={props.onDelete}/>
    </li>
  );
}

export { TodoItem };
