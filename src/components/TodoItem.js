import '../assets/styles/TodoItem.css'

function TodoItem(props) {
  return (
    <li className="todoItem">
      <span className={'icon-verification ' + (props.todo.completed ? 'complete-color' : '')} onClick={props.onComplete}>
        V
      </span>
      <p className={'todoItem-text ' + (props.todo.completed ? 'complete-mark' : '')}>
        {props.todo.text}
      </p>
      <span className='icon-cancel' onClick={props.onDelete}> X </span>
    </li>
  );
}

export { TodoItem };
