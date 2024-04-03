function TodoItem({description}) {
  return (
    <li>
      <span>V</span>
      <p>{description}</p>
      <span>X</span>
    </li>
  );
}

export {TodoItem}