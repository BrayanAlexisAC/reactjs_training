import '../assets/styles/TodoItem.css'

function TodoItem({ todo }) {
  console.log(todo)
  return (
    <li className="todoItem">
      <span className={'icon-verification ' + (todo.completed ? 'complete-color' : '') }>V</span>
      <p className={todo.completed ? 'complete-mark' : ''}>
        {todo.text}
      </p>
      <span className='icon-cancel'> X </span>
    </li>
  );
}

export { TodoItem };
