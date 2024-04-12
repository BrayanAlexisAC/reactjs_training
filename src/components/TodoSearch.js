import React from "react";
import "../assets/styles/TodoSearch.css";
import { TodoContext } from "../contexts/TodoContext";

function TodoSearch() {
  const {
    searchValue,
    setSearchValue
  } = React.useContext(TodoContext)
  return React.createElement(
    'input',
    {
      className:'todoSearch', 
      type:'text', 
      placeholder:'Buscar', 
      value:searchValue,
      onChange:(event) => {
        setSearchValue(event.target.value)
      }
    }
  )
}

export { TodoSearch };
