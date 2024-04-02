import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <TodoItem element={1} maxElements={3}/>
      <TodoItem element={2} maxElements={3}/>
      <TodoItem element={3} maxElements={3}/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function TodoItem(props){
  return (
    <li>
      <span>V</span>
      <p>Element {props.element} de {props.maxElements}</p>
      <span>X</span>
    </li>
  );
}

export default App;
