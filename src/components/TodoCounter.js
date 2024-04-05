import '../assets/styles/TodoCounter.css'

function TodoCounter(props) {
  return (
    <h1 className="todoCounter">
      Has completado <br/> <b>{props.finishNumber}</b> de <b>{props.totalTodoThings}</b> TODOs
    </h1>
  );
}

export { TodoCounter };
