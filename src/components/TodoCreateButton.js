import '../assets/styles/TodoCreateButton.css'

function TodoCreateButton({ type, action }) {
  return (
    <button className='create-button' onClick={action}>
      {type}
    </button>
  );
}

export { TodoCreateButton };
