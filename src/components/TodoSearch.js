import "../assets/styles/TodoSearch.css";

function TodoSearch() {
  return (
    <input className="todoSearch" type="text" placeholder="Estudiar Reactjs" onChange={(event) => {
      console.log(event.target.value)
    }}/>
  );
}

export { TodoSearch };
