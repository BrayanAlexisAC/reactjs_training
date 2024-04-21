import React from "react";
import { TodoContext } from "../contexts/TodoContext";
import { SearchIcon } from "./icons/SearchIcon";

import "../assets/styles/TodoSearch.css";

function TodoSearch() {
  const {
    searchValue,
    setSearchValue
  } = React.useContext(TodoContext)
  const [searchFocus, setSearchFocus] = React.useState(false)
  return React.createElement(
    'div',
    {className: 'todoSearchContainer'},
    React.createElement(
      'input',
      {
        className:'todoSearch',
        type:'text', 
        placeholder:'Buscar', 
        value:searchValue,
        onFocus: () => {
          setSearchFocus(true)
        },
        onBlur: () => {
          setSearchFocus(false)
        }, 
        onChange:(event) => {
          setSearchValue(event.target.value)
        }
      }
    ),
    <SearchIcon className={ searchFocus && 'icon-search-focus' }/>
  )
}

export { TodoSearch };
