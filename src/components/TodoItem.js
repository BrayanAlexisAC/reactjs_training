function TodoItem({ todo }) {
  console.log(todo)
  return (
    <li>
      <span>V</span>
      <p>
        {todo.text} completed: {todo.completed.toString()}
      </p>
      <span>X</span>
    </li>
  );
}

export { TodoItem };
