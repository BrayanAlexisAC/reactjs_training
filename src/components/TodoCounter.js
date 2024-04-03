function TodoCounter(props) {
  return (
    <h1>
      Haz completado {props.finishNumber} de {props.totalTodoThings} Activades
    </h1>
  );
}

export { TodoCounter };
