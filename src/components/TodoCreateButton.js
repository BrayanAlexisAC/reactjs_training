function TodoCreateButton(props) {
  return (
    <div>
        <button name={props.type + '-button'} onClick={props.action}>{props.type}</button>
    </div>
  );
}

export {TodoCreateButton}