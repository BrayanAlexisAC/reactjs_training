function TodoCreateButton({type, action}) {
  return (
    <div>
        <button name={type + '-button'} onClick={action}>{type}</button>
    </div>
  );
}

export {TodoCreateButton}