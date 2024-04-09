import React from "react";
import "../assets/styles/TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue }) {
  return React.createElement(
    'input',
    {
      className:'todoSearch', 
      type:'text', 
      placeholder:'Estuduiar ReactJs', 
      value:searchValue,
      onChange:(event) => {
        setSearchValue(event.target.value)
      }
    }
  )
}

export { TodoSearch };
